import { Container } from "inversify";
import { TYPES } from "./Types";

// controllers
import { AuthController } from "../controllers/AuthController";

// services

// repos

// models and entities

const container = new Container();

// controller binding
container.bind<AuthController>(TYPES.AuthController).to(AuthController);

export { container };
