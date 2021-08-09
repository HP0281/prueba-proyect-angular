import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecoveredComponent } from './form-recovered.component';

describe('FormRecoveredComponent', () => {
  let component: FormRecoveredComponent;
  let fixture: ComponentFixture<FormRecoveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecoveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
