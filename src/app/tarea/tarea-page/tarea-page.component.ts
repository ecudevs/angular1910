import { Component, OnInit } from "@angular/core";
import { TareaService } from "src/app/services/tarea.service";

@Component({
  selector: "app-tarea-page",
  templateUrl: "./tarea-page.component.html",
  styleUrls: ["./tarea-page.component.sass"]
})
export class TareaPageComponent implements OnInit {
  mostrarFormulario = false;

  tareas: any = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareaService.getTareas().subscribe((response: any) => {
      console.log(1);
      this.tareas = response.tareas;
    });
  }

  cambiarEstado(tarea, estado) {
    // let indice = this.tareas.findIndex(tareaIteracion => {
    //   return tarea.descripcion == tareaIteracion.descripcion;
    // });
    this.tareaService.updateTarea({ ...tarea, estado }).subscribe(
      (response: any) => {
        console.log(response.mensaje);
        this.cargarTareas();
      },
      error => {
        console.log("Ocurrio un error");
        console.log(error);
      }
    );
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
    this.tareaService.insertTarea(tarea).subscribe(
      (response: any) => {
        console.log(response.mensaje);
        this.mostrarFormulario = false;
        this.cargarTareas();
      },
      error => {
        console.log("Ocurrio un error");
        console.log(error);
      }
    );
  }
}
