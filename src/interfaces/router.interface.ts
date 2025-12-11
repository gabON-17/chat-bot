import { Router } from "express";

export interface RouteExpress {
  routing(): void;
  getRouter(): Router;
}
