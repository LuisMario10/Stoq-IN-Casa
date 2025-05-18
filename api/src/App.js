import express from "express";
import { _PRODUCT_ROUTER } from "./routers/Product.Router.js";

const _APP = express();

const _PORT = 2345;

_APP.use(express.json());

_APP.use(_PRODUCT_ROUTER)

_APP.listen(_PORT, () => console.log(`Servidor Rodando em: http://localhost:${_PORT}`));