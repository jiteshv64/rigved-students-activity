import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOneAccountComponent } from './find-one-account.component';

describe('FindOneAccountComponent', () => {
  let component: FindOneAccountComponent;
  let fixture: ComponentFixture<FindOneAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindOneAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOneAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
