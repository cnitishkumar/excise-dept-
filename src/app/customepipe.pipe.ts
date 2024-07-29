import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe',
  standalone: true
})
export class CustomepipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value.charAt(0).toUpperCase() + value.slice(1); //convert first letter to upper case ;
  }

}
