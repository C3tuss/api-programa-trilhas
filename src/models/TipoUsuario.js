import mongoose from "mongoose";

const ocupacaoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    profissao: {type: String, required: true}
}, {versionKey: false});

const ocupacao = mongoose.model("ocupacoes", ocupacaoSchema);

export {ocupacao, ocupacaoSchema};