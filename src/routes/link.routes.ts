import { Request, Response, Router } from "express";
import { RouteExpress } from "../interfaces/router.interface";
import LinkController from "../controller/link.controller";

export default class LinkRouter implements RouteExpress {
  constructor(
    private readonly router: Router,
    private readonly linkController: LinkController
  ) {}
  routing(): void {
    this.router.post("/verify", (req: Request, res: Response) => {
      this.linkController.verify(req, res);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
