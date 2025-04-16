import * as dotenv from "dotenv";
dotenv.config();

const isProd = process.env.NODE_ENV === "production";

export default {
  isProd,
  port: parseInt(process.env.PORT || "5000"),
  mailer: {
    host: process.env.MAILER_HOST,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  },
};
