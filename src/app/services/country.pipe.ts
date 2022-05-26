import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrypipe'
})
export class CountryPipe implements PipeTransform {

  transform(value: any[], country: string): any[] {
    let newvales = [];
    for(let val of value){
      if (val.country == country){
        newvales.push(val);
      }
    }

    return newvales;
  }

}
