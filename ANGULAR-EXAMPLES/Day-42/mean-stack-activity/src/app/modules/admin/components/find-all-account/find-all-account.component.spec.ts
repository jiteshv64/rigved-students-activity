import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllAccountComponent } from './find-all-account.component';

describe('FindAllAccountComponent', () => {
  let component: FindAllAccountComponent;
  let fixture: ComponentFixture<FindAllAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
