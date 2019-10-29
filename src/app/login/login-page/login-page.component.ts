import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  userPass: any = {};
  error;

  loading = false;

  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit() {}

  intentoLogin() {
    this.error = undefined;
    this.loading = true;

    this.loginService.login(this.userPass).subscribe(
      (response: any) => {
        this.loading = false;
        localStorage.setItem("usuario", JSON.stringify(response));
        this.route.navigate(["/"]);
      },
      error => {
        this.loading = false;
        this.error = error.error.mensaje;
      }
    );
  }
}
