import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { GlobalConfigService } from "./global-config.service";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private route: Router,
    private config: GlobalConfigService
  ) {}

  login(userPass) {
    return this.http.post(this.config.getUrlBase() + `/login`, userPass);
  }

  logout() {
    localStorage.removeItem("usuario");
    this.route.navigate(["/login"]);
  }
}
