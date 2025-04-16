import { createTransport } from "nodemailer";
import config from "../../config";

const transporter = createTransport({
  host: config.mailer.host,
  port: 587,
  secure: false,
  auth: {
    user: config.mailer.auth.user,
    pass: config.mailer.auth.pass,
  },
});

export const sendMailer = async (to: string, subject: string, html: any) => {
  return await transporter.sendMail({
    from: '"Alexandros zorbadakis 👻" <alexander@zorbadakis.me>', // sender address
    to: to,
    subject,
    html,
  });
};
