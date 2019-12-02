import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toEuro"
})
export class ToEuroPipe implements PipeTransform {
  transform(value: number, args?: any): any {
    let result = `€ ${value}`;
    return result;
  }
}
