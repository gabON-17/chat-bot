import { Request, Response } from "express";
import { AppService } from "../service/app.service";

export class AppController {
  constructor(private readonly appService: AppService) {}

  async resolveQuestion(req: Request, res: Response) {
    const resIA = await this.appService.resolveQuestion(req.body.message);
    res.status(200);
    res.send({
      message: resIA,
    });
  }
}
