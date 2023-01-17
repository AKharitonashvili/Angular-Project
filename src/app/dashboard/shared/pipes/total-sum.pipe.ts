import { Pipe, PipeTransform } from '@angular/core';
import { Account } from '../../models';

@Pipe({
  name: 'totalSum',
})
export class TotalSumPipe implements PipeTransform {
  transform(array: Account[], args?: any): any {
    return array.reduce((a: any, account: Account) => {
      return a.balanceInGel || 0 + account.balanceInGel || 0;
    });
  }
}
