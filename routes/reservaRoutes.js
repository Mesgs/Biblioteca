const express = require("express");
const routes = express.Router();
const reservaController = require("../controller/reservaController");

routes.get("/reservas", reservaController.listar);
routes.post("/reservas", reservaController.cadastrarPost);
routes.get("/reservas/cadastrar/:matricula?", reservaController.cadastrarGet);
routes.get("/reservas/:matricula", reservaController.detalhar);
routes.get("/reservas/remover/:matricula", reservaController.remover);

module.exports = routes;