const tareas = [
  {
    _id: 1,
    descripcion: "Tarea 1",
    feCreacion: new Date(),
    asignado: { nombre: "Thian Lopez", correo: "thianlopezz@gmail.com" },
    estado: "TO_DO"
  },
  {
    _id: 2,
    descripcion: "Tarea 2",
    feCreacion: new Date(),
    asignado: { nombre: "Thian Lopez", correo: "thianlopezz@gmail.com" },
    estado: "TO_DO"
  },
  {
    _id: 3,
    descripcion: "Terminar lo que esta por hacer 2",
    feCreacion: new Date(),
    asignado: { nombre: "Thian Lopez", correo: "thianlopezz@gmail.com" },
    estado: "IN_PROGRESS"
  },
  {
    idTarea: 4,
    descripcion: "Terminar lo que esta por hacer 3",
    feCreacion: new Date(),
    asignado: { nombre: "Thian Lopez", correo: "thianlopezz@gmail.com" },
    estado: "FINISHED"
  }
];

module.exports = tareas;
