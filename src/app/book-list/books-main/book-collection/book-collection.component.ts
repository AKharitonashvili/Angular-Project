import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../../models/models';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCollectionComponent implements OnInit {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
}
