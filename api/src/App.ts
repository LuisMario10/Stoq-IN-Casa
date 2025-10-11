import express, { Express } from "express";
import cors from 'cors'
import "dotenv/config";

export const _APP: Express = express();
 
const _PORT: string | undefined | number = process.env.PORT || 2345;

const corsOptions: object = {
    origin: `http://localhost:${process.env.FRONT_PORT}`,
    credentials: true,              
};

_APP.use(express.json());

_APP.use(cors(corsOptions));

_APP.listen(_PORT, () => {
    console.log(`Servidor Rodando Localmente => http://localhost:${_PORT}/`);
});
