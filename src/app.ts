import express from "express";
import cors from "cors";

import { AppDataSource } from "./database/dataSource";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    const app = express();

    app.use(
      cors({
        origin: [
          "http://localhost:5173",
          "http://localhost:8080",
          "http://localhost:4200",
        ],
      })
    );

    app.use(express.json());

    app.listen(5000, () => {
      console.log("Listening ...");
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
