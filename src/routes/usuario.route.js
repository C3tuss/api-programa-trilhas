import express from "express";
import UsuarioController from "../controllers/usuarios.controller.js";

const routes = express.Router();
routes.post("/Usuario", UsuarioController.cadastrarUsuario);
routes.get("/Usuario", UsuarioController.listarUsuarios);
routes.get("/Usuario/:id", UsuarioController.listarUsuarioPorId);
routes.put("/Usuario/:id", UsuarioController.atualizarUsuario);
routes.delete("/Usuario/:id", UsuarioController.excluirUsuario);

export default routes;