import AutorController from "../controllers/autorControllers.js";
import express from "express";

const routes = express.Router();

routes.get("/autor", AutorController.listarAutores);
routes.get("/autor/:id", AutorController.listaAutorPorId);
routes.post("/autor", AutorController.cadastrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutor);
routes.delete("/autor/:id", AutorController.excluirAutor);

export default routes;
