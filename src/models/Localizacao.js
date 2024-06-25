import mongoose from "mongoose";

const localizacaoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    localidade: {type: String, required: true},
}, {versionKey: false});

const localizacao = mongoose.model("localizacao", localizacaoSchema);

export {localizacao, localizacaoSchema};