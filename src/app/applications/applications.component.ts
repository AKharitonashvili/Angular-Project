import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApplicationsRestService } from './services/rest/applications-rest.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  public cards$: Observable<any>;
  public deposits$: Observable<any>;

  constructor(private rest: ApplicationsRestService) {}

  ngOnInit() {
    this.cards$ = this.rest.getAccounts().pipe(
      tap((accounts) => {
        if (accounts) {
          this.deposits$ = this.rest.getAdditionalAccounts();
        }
      })
    );
  }
}
