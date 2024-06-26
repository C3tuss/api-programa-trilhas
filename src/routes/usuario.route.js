import express from "express";
import UsuarioController from "../controllers/usuarios.controller.js";

const routes = express.Router();
routes.post("/usuario", UsuarioController.cadastrarUsuario);
routes.get("/usuario", UsuarioController.listarUsuarios);
routes.get("/usuario/:id", UsuarioController.listarUsuarioPorId);
routes.put("/usuario/:id", UsuarioController.atualizarUsuario);
routes.delete("/usuario/:id", UsuarioController.excluirUsuario);

export default routes;