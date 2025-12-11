import { Request, Response, Router } from "express";
import { RouteExpress } from "../interfaces/router.interface";
import { AppController } from "../controller/app.controller";

export class AppRouter implements RouteExpress {
  constructor(
    private readonly router: Router,
    private readonly appController: AppController
  ) {}

  routing(): void {
    this.router.post("/", (req: Request, res: Response) => {
      console.log(req.body);
      this.appController.resolveQuestion(req, res);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
