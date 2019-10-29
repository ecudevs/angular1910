import { Component } from "@angular/core";
import { LoginService } from "./services/login.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  mensaje = "Hola mundo!";

  constructor(private loginService: LoginService) {}

  logout() {
    this.loginService.logout();
  }
}
