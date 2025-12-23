import { Router } from "express";
import { UserController } from "../controllers/User";

export const _ROUTER: Router = Router();

_ROUTER.get("/", (_, response) => response.send("Hello LiStart"));

_ROUTER.get("/users", UserController.getAll);

_ROUTER.get("/users/:id", UserController.getByID);

_ROUTER.post("/users", UserController.post);

_ROUTER.put("/users/:id", UserController.put);

_ROUTER.delete("/users/:id", UserController.deleteController);