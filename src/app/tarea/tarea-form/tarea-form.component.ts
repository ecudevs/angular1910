import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tarea-form",
  templateUrl: "./tarea-form.component.html",
  styleUrls: ["./tarea-form.component.sass"]
})
export class TareaFormComponent implements OnInit {
  tarea = { descripcion: "", asignado: {}, estado: "TO_DO" };

  @Output() guardarToDo = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  sumitForm() {
    this.guardarToDo.next({ ...this.tarea, feCreacion: new Date() });
  }
}
