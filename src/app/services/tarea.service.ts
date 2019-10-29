import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConfigService } from "./global-config.service";

@Injectable({
  providedIn: "root"
})
export class TareaService {
  constructor(private http: HttpClient, private config: GlobalConfigService) {}

  getTareas() {
    return this.http.get(this.config.getUrlBase() + "/tareas");
  }

  getTareaById(_id) {
    return this.http.get(this.config.getUrlBase() + "/tarea/" + _id);
  }

  insertTarea(tarea) {
    return this.http.post(this.config.getUrlBase() + "/tarea", tarea);
  }

  updateTarea(tarea) {
    return this.http.put(this.config.getUrlBase() + "/tarea", tarea);
  }
}
