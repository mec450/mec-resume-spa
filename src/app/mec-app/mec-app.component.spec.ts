/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MecAppComponent } from './mec-app.component';

describe('MecAppComponent', () => {
  let component: MecAppComponent;
  let fixture: ComponentFixture<MecAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
