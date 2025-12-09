import express, { Express, Router } from "express";
import { AppRouter } from "./routes/app.router";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const appRouter: AppRouter = new AppRouter(express.Router());

// Configuração CORS para permitir qualquer origem
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Responde imediatamente para requisições OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());

app.listen(3000, () => {
  app.use(appRouter.getRouter());
  appRouter.routing();
  console.log("Serve iniciado");
});
