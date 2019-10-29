import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TareaPageComponent } from "./tarea/tarea-page/tarea-page.component";
import { TareaDetallePageComponent } from "./tarea/tarea-detalle-page/tarea-detalle-page.component";
import { LoginGuard } from "./guard/login.guard";
import { LoginPageComponent } from "./login/login-page/login-page.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "",
    component: TareaPageComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "detalle/:idTarea",
    component: TareaDetallePageComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "*",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
