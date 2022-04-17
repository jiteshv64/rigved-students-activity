import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRegisterSuccessComponent } from './p-register-success.component';

describe('PRegisterSuccessComponent', () => {
  let component: PRegisterSuccessComponent;
  let fixture: ComponentFixture<PRegisterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRegisterSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PRegisterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
