import { Router } from "express";
import { deleteProd, getAll, getByID, post, putExpirationDate, putName, putQuantity } from "../controllers/Product.Controller.js";

export const _PRODUCT_ROUTER = Router();

_PRODUCT_ROUTER.get("/stoq/prod/g/all", (request, response) => getAll(request, response));

_PRODUCT_ROUTER.get("/stoq/prod/g/byid", (request, response) => getByID(request, response));

_PRODUCT_ROUTER.post("/stoq/prod/p/", (request, response) => post(request, response));

_PRODUCT_ROUTER.put("/stoq/prod/u/name", (request, response) => putName(request, response));

_PRODUCT_ROUTER.put("/stoq/prod/u/quant", (request, response) => putQuantity(request, response));

_PRODUCT_ROUTER.put("/stoq/prod/u/expdate", (request, response) => putExpirationDate(request, response));

_PRODUCT_ROUTER.delete("/stoq/prod/d/", (request, response) => deleteProd(request, response));
