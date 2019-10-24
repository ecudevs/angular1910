import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TareaService {
  constructor(private http: HttpClient) {}

  getTareas() {
    return this.http.get("http://localhost:9000/tareas");
  }

  insertTarea(tarea) {
    return this.http.post("http://localhost:9000/tarea", tarea);
  }
}
