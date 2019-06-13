import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadComponent } from './calculad.component';

describe('CalculadComponent', () => {
  let component: CalculadComponent;
  let fixture: ComponentFixture<CalculadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
