import { config } from "dotenv";
import { ethers } from "ethers";
import abi from "../abi";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const sendData = await sendToken(body.address);
  return {
    sendData: sendData,
  };
});

async function sendToken(toAddress: string) {
  config({ path: "/path/to/.env" });

  const tokenContract = "0x8318312dE65409CB61dF940a821C710e24843e62";

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

  try {
    const tx = await signer.sendTransaction({
      to: tokenContract,
      from: signer.address,
      value: ethers.parseUnits("0.000", "ether"),
      data: data,
    });

    const receipt = await tx.wait();

    let hashData = {
      url: `https://mumbai.polygonscan.com/tx/${tx.hash}`,
      message: `Mined in block ${receipt!.blockNumber}`,
    };

    return hashData;
  } catch (error) {
    let hashData = {
      url: "",
      message: `Error: ${error}`,
    };

    return hashData;
  }
}
