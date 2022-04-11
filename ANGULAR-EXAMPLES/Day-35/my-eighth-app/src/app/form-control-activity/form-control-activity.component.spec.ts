import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlActivityComponent } from './form-control-activity.component';

describe('FormControlActivityComponent', () => {
  let component: FormControlActivityComponent;
  let fixture: ComponentFixture<FormControlActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
