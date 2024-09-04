import dotenv from "dotenv";
dotenv.config();

class AppConfig {
  static getMongoDbUri(): string {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in the environment");
    }

    return process.env.MONGODB_URI;
  }
}

export { AppConfig };
