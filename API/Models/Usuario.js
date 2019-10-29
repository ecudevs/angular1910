const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  usuario: { type: String, required: true },
  contrasena: { type: String, required: true }
});

const usuario = mongoose.model("usuario", usuarioSchema);

module.exports = usuario;
