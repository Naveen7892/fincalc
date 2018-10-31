import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundPage } from './compound.page';

describe('CompoundPage', () => {
  let component: CompoundPage;
  let fixture: ComponentFixture<CompoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
