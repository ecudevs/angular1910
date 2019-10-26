const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tareaSchema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  prioridad: Number,
  asignado: { nombre: String, apellido: String },
  feCreacion: { type: Date, default: Date.now },
  estado: { type: String, default: "TO_DO" }
});

const tarea = mongoose.model("tarea", tareaSchema);

module.exports = tarea;
