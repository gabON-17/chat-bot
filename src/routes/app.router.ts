import { Request, Response, Router } from "express";
import { RouterExpress } from "../utils/interfaces/router.interface";
import { AppController } from "../controller/app.controller";
import { AppService } from "../service/app.service";

export class AppRouter implements RouterExpress {
  constructor(
    private readonly appRouter: Router,
    private readonly appController: AppController = new AppController(
      new AppService()
    )
  ) {}

  routing(): void {
    this.appRouter.post("/", (req: Request, res: Response) => {
      this.appController.resolveQuestion(req, res);
    });
  }

  getRouter(): Router {
    return this.appRouter;
  }
}
