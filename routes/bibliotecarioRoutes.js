const express = require("express");
const routes = express.Router();
const bibliotecarioController = require("../controller/bibliotecarioController");

routes.get("/bibliotecarios", bibliotecarioController.listar);
routes.post("/bibliotecarios", bibliotecarioController.cadastrarPost);
routes.get("/bibliotecarios/cadastrar/:matricula?", bibliotecarioController.cadastrarGet);
routes.get("/bibliotecarios/:matricula", bibliotecarioController.detalhar);
routes.get("/bibliotecarios/remover/:matricula", bibliotecarioController.remover);

module.exports = routes;