/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BooksMainComponent } from './books-main.component';

describe('BooksMainComponent', () => {
  let component: BooksMainComponent;
  let fixture: ComponentFixture<BooksMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
