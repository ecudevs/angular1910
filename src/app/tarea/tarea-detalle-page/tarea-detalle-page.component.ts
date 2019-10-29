import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TareaService } from "src/app/services/tarea.service";

@Component({
  selector: "app-tarea-detalle-page",
  templateUrl: "./tarea-detalle-page.component.html",
  styleUrls: ["./tarea-detalle-page.component.sass"]
})
export class TareaDetallePageComponent implements OnInit {
  _id: number;
  tarea: any = {};

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) {
    // this._id = route.snapshot.params.idTarea;
    // this.getTarea();
    route.params.subscribe(params => {
      this._id = params.idTarea;
      this.getTarea();
    });
  }

  ngOnInit() {}

  getTarea() {
    this.tareaService
      .getTareaById(this._id)
      .subscribe((response: any) => (this.tarea = response.tarea));
  }
}
