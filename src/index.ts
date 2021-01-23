const sgMail = require("@sendgrid/mail");
import { IMsg } from "./Interfaces";

export const useTwilioMail = (apiKey: string, obj: IMsg) => {
  sgMail.setApiKey(apiKey);
  sgMail
    .send(obj)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error: any) => {
      console.error(error);
    });
};
