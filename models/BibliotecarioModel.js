const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bibliotecarioSchema = Schema({
    matricula: Number,
    nome: String,
    cargo: String,
    turno: String,
    salario: Number
});

module.exports = mongoose.model("Bibliotecario", bibliotecarioSchema);

