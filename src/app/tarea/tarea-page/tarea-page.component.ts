import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tarea-page",
  templateUrl: "./tarea-page.component.html",
  styleUrls: ["./tarea-page.component.sass"]
})
export class TareaPageComponent implements OnInit {
  mostrarFormulario = false;

  tareas: any = [
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

  constructor() {}

  ngOnInit() {}

  cambiarAInProgress(tarea) {
    // let indice = this.tareas.findIndex(tareaIteracion => {
    //   return tarea.descripcion == tareaIteracion.descripcion;
    // });
    let indice = this.tareas.findIndex(
      tareaIteracion => tarea.descripcion == tareaIteracion.descripcion
    );
    this.tareas[indice].estado = "IN_PROGRESS";
  }

  cambiarAFinished(tarea) {
    // let indice = this.tareas.findIndex(tareaIteracion => {
    //   return tarea.descripcion == tareaIteracion.descripcion;
    // });
    let indice = this.tareas.findIndex(
      tareaIteracion => tarea.descripcion == tareaIteracion.descripcion
    );
    this.tareas[indice].estado = "FINISHED";
  }

  nuevaTarea(tarea) {
    this.tareas.push({ ...tarea, _id: this.tareas.length + 1 });
  }
}
