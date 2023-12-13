import { config } from "dotenv";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const sendData = await registerMail(body.address);
  return {
    sendData: sendData,
  };
});

const registerMail = (email: string) => {

}