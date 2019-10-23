import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TareaPageComponent } from "./tarea/tarea-page/tarea-page.component";
import { TareaDetallePageComponent } from "./tarea/tarea-detalle-page/tarea-detalle-page.component";

const routes: Routes = [
  { path: "", component: TareaPageComponent },
  { path: "detalle", component: TareaDetallePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
