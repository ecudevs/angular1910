import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-tarea-card",
  templateUrl: "./tarea-card.component.html",
  styleUrls: ["./tarea-card.component.sass"]
})
export class TareaCardComponent implements OnInit {
  @Input() tarea = {};
  @Output() clickCambiarEstado = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  cambiarEstado() {
    this.clickCambiarEstado.next(this.tarea);
  }
}
