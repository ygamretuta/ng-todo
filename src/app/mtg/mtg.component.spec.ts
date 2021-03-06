/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MtgComponent } from './mtg.component';

describe('MtgComponent', () => {
  let component: MtgComponent;
  let fixture: ComponentFixture<MtgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
