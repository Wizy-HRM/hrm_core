import express, { Express, json } from "express";
import bodyParser from "body-parser";
import { HttpInterface } from "./types";
import cors from "cors";
import jobRouter from "./routes/job-routes";

export default ({ config }: HttpInterface): void => {
  const app: Express = express();

  app.use(
    cors({
      credentials: true,
      methods: "GET, POST, PUT, PATCH, DELETE",
      origin: "*",
    })
  );

  app.use(bodyParser.urlencoded());

  app.use(bodyParser.json());

  app.use("/v1", jobRouter);

  app.listen(config.port, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server is up on porst ${process.env.PORT}`);
  });
};
