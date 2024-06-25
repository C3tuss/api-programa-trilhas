import mongoose from "mongoose";
import { localizacaoSchema } from "./Localizacao.js";
import { ocupacaoSchema } from "./TipoUsuario.js";

const usuarioSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nick: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    localizacao: {type: localizacaoSchema, required: true},
    tipoUsuario: {type: ocupacaoSchema, required: true}

}, {versionKey: false});

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;