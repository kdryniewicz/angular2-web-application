/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemeRowComponent } from './meme-row.component';

describe('MemeRowComponent', () => {
  let component: MemeRowComponent;
  let fixture: ComponentFixture<MemeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
