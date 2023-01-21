import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  public showAllItems$ = new Subject<string>();

  constructor() {}
}
