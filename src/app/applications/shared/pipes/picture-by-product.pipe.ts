import { Pipe, PipeTransform } from '@angular/core';
import { AccountTypes, Pictures } from '../../helpers';

@Pipe({
  name: 'parsePictures',
})
export class PictureByProductPipe implements PipeTransform {
  transform(picture: string, type?: string): string {
    let assets = `./assets/img/products/`;
    let img = 'default';

    if (!picture) return null;
    switch (type) {
      case AccountTypes.CREDIT:
      case AccountTypes.DEBIT:
        {
          assets += `cards/`;
          if (picture) img = picture;
          return assets + img + '.svg';
        }
        break;
      case AccountTypes.DEPOSIT:
      case AccountTypes.SAVING:
        {
          assets += `deposits/`;
          return assets + img + '.svg';
        }
        break;
      default: {
        return null;
      }
    }

    return assets + img + '.svg';
  }
}
