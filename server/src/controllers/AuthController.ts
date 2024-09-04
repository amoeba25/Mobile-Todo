import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";

@controller("/user")
class AuthController {
  @httpGet("")
  public async hello(req: Request, res: Response) {
    res.status(200).json({ message: "Hello world!" });
  }
}

export { AuthController };
