import express, { Express } from "express";
import { _ROUTER } from "./routers";
import cors from 'cors'
import "dotenv/config";

export const _APP: Express = express();
 
const _PORT: string | undefined | number = process.env.PORT ?? 2345;

_APP.use(express.json());

_APP.use(cors());

_APP.use(_ROUTER);

_APP.listen(_PORT, () => {
    console.log(`Servidor Rodando Localmente => http://localhost:${_PORT}/`);
});
