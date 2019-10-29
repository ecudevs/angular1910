import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalConfigService {
  constructor() {}

  getUrlBase() {
    // return `http://localhost:9000`;
    return "";
  }
}
