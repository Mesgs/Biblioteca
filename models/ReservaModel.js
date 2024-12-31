const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservaSchema = Schema({
    matricula: Number,
    matriculaB: Number,
    nomeLivro: String,
    data: Date
});

module.exports = mongoose.model("Reserva", reservaSchema);
