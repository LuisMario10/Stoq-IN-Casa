import { Router } from "express";

export const _ROUTER: Router = Router();

_ROUTER.get("/", (_, response) => response.send("Hello Stoq"));

_ROUTER.get("/lists", (request, response) => console.log("Rota"))