import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./config/InversifyConfig";
import logger from "./config/LoggingConfig";
import { connectToDatabase } from "./config/DatabaseConfig";
import { startTimer } from "winston";

const port = 3000;

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  logger.info("Setting up server");
  app.use(express.json()); // parses incoming requests
});

const app = server.build();

const startServer = async () => {
  await connectToDatabase();
  app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}/`);
  });
};

startServer().catch(logger.error);
