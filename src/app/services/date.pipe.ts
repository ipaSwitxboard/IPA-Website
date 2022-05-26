import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatePipe implements PipeTransform {

  transform(value: any[]): any[] {
    let newvales = [];
    for(let val of value){
      if(val.end_date){
        newvales.push(val);
      }
    }
    return newvales;
  }

}
