import mongoose from "mongoose";
import logger from "./LoggingConfig";
import { AppConfig } from "./AppConfig";

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(AppConfig.getMongoDbUri());
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error("Mongo DB connection error: ", error);
    process.exit(1);
  }
};
