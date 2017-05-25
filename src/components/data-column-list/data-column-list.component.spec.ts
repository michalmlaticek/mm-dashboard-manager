/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataColumnListComponent } from './data-column-list.component';

describe('MmColumnsComponent', () => {
  let component: DataColumnListComponent;
  let fixture: ComponentFixture<DataColumnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataColumnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataColumnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
