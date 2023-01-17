import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount',
})
export class AmountPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (Math.round(value * 100) / 100).toFixed(2) || '0.00';
  }
}
