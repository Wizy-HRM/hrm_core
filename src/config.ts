import * as dotenv from "dotenv";
dotenv.config();

const isProd = process.env.NODE_ENV === "production";

export default {
  isProd,
  port: parseInt(process.env.PORT || "5000"),
};
