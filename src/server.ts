import express, { Express, Router } from "express";
import { AppRouter } from "./routes/app.routes";
import dotenv from "dotenv";
import { AppController } from "./controller/app.controller";
import { AppService } from "./service/app.service";
import { RouteExpress } from "./interfaces/router.interface";
import LinkRouter from "./routes/link.routes";
import LinkController from "./controller/link.controller";
import LinkService from "./service/link.service";
dotenv.config();

const app: Express = express();
const appRouter: RouteExpress = new AppRouter(
  express.Router(),
  new AppController(new AppService())
);
const linkRouter: RouteExpress = new LinkRouter(
  express.Router(),
  new LinkController(new LinkService())
);

// Configuração CORS para permitir qualquer origem
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());

app.listen(3000, () => {
  app.use(appRouter.getRouter());
  app.use(linkRouter.getRouter());

  appRouter.routing();
  linkRouter.routing();

  console.log("Serve iniciado");
});
