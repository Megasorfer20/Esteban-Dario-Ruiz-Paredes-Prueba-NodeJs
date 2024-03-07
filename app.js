import { config } from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/gets.routers.js";
import { initializeModels } from "./database/initializationDB.js";

config();

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = "/api";

    this.middleware();
    this.initializationDB();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.path, router);
  }

  async initializationDB() {
    await initializeModels()
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App running in port ${this.port}`);
    });
  }
}
