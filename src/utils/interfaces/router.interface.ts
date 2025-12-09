import { Router } from "express";

export interface RouterExpress {
  routing(): void;
  getRouter(): Router;
}
