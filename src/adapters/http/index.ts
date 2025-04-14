import express, { Express, json } from "express";
import bodyParser from "body-parser";
import { HttpInterface } from "./types";
import cors from "cors";
import jobRouter from "./routes/job-routes";
import companyRouter from "./routes/company-routes";
import cookieParser from "cookie-parser";

export default ({ config }: HttpInterface): void => {
  const app: Express = express();

  app.use(cookieParser());
  app.use(
    cors({
      credentials: true,
      methods: "GET, POST, PUT, PATCH, DELETE",
      origin: "*",
    })
  );

  app.use(bodyParser.urlencoded());

  app.use(bodyParser.json());

  app.use("/v1/jobs", jobRouter);
  app.use("/v1/company", companyRouter);

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is up on porst ${process.env.PORT}`);
  });
};
