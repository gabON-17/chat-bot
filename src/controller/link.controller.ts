import { Request, Response } from "express";
import LinkService from "../service/link.service";

export default class LinkController {
  constructor(private readonly linkService: LinkService) {}

  async verify(req: Request, res: Response): Promise<void> {
    const response = await this.linkService.verify(req.body.link);
    res.status(200);
    res.send({ message: response });
  }
}
