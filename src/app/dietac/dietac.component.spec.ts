import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietacComponent } from './dietac.component';

describe('DietacComponent', () => {
  let component: DietacComponent;
  let fixture: ComponentFixture<DietacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
