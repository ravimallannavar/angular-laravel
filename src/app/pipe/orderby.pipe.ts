import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }
  transform = orderBy;


}
