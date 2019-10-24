import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "estado"
})
export class EstadoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value == "TO_DO") {
      return "Por realizar";
    } else if (value == "IN_PROGRESS") {
      return "En proceso";
    } else if (value == "FINISHED") {
      return "Finalizado";
    }

    return null;
  }
}
