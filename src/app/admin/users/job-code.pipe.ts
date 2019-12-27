import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobCode'
})
export class JobCodePipe implements PipeTransform {

  transform(value: any[]) {
   var finalValues =  value.map(x=> x.jobCode);
    return finalValues.toString();
  }

}
