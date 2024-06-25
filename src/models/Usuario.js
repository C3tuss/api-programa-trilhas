import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nick: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    localizacao: {
        cidade: { type: String },
        estado: { type: String },
    },
    tipoUsuario: { type: String, enum: ['Professor', 'Aluno'], default: 'Aluno' }
}, {versionKey: false});

const usuario = mongoose.model("usuarios", usuarioSchema);

export default usuario;