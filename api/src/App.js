import express from "express";

const _APP = express();

const _PORT = 2345;

_APP.use(express.json());

_APP.listen(_PORT, () => `Servidor Rodando em: http://localhost:${_PORT}`);