import { config } from "dotenv";
import { ethers } from "ethers";
import { readFileSync } from "node:fs";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const sendData = await sendToken(body.address);
  return {
    sendData: sendData,
  };
});

async function sendToken(toAddress: string) {
  console.log(toAddress)
  config({ path: "/path/to/.env" });

  const jsonFile = "/contracts/abi/token.json";
  const abi = JSON.parse(readFileSync(jsonFile).toString());
  const tokenContract = "0x153dE0bA5B0DdEb8817C4bc2f6Afd201ae391c48";

  const network = process.env.ETHEREUM_NETWORK;
  const provider = new ethers.InfuraProvider(network, process.env.INFURA_KEY);

  const contract = new ethers.Contract(tokenContract, abi, provider);
  const signer = new ethers.Wallet(process.env.SIGNER_PRIVATE_KEY!, provider);

  const amount = ethers.parseUnits("500", 18);

  const data = contract.interface.encodeFunctionData("mint", [
    toAddress,
    amount,
  ]);

  // Creating and sending the transaction object

  const tx = await signer.sendTransaction({
    to: tokenContract,
    from: signer.address,
    value: ethers.parseUnits("0.000", "ether"),
    data: data,
  });

  const receipt = await tx.wait();

  let hashData = {
    url: `https://${network}.etherscan.io/tx/${tx.hash}`,
    message: `Mined in block ${receipt!.blockNumber}`,
  };

  return hashData;
}
