import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tarea-form",
  templateUrl: "./tarea-form.component.html",
  styleUrls: ["./tarea-form.component.sass"]
})
export class TareaFormComponent implements OnInit {
  tarea: any = { descripcion: "", asignado: {}, estado: "TO_DO" };

  prioridadesList = new Array(10).fill(1);

  @Output() guardarToDo = new EventEmitter<any>();

  constructor() {
    this.prioridadesList = this.prioridadesList.map((item, index) => {
      return { text: index + 1, value: index + 1 };
    });
  }

  ngOnInit() {}

  sumitForm() {
    this.guardarToDo.next({ ...this.tarea, feCreacion: new Date() });
  }
}
