import express from "express";
import UsuarioController from "../controllers/usuarios.controller";

const routes = express.Router();
routes.post("/Usuario", UsuarioController.novoUsuario);
routes.get("/Usuario", UsuarioController.buscarUsuarios);
routes.get("/Usuario/:id", UsuarioController.buscarUsuarioPorId);
routes.put("/Usuario/:id", UsuarioController.atualizarUsuario);
routes.delete("/Usuario/:id", UsuarioController.excluirUsuario);

export default routes;