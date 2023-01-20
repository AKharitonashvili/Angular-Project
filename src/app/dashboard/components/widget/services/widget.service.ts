import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountsByCategory } from 'src/app/dashboard/models';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  public showAllItems$ = new Subject<AccountsByCategory>();

  constructor() {}
}
