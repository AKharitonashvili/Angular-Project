import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AccountsByCategory } from '../../models';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent implements OnInit {
  @Input() public accountsByCategory: AccountsByCategory[];

  constructor() {}

  ngOnInit(): void {}
}
