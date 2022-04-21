import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAccountComponent } from './store-account.component';

describe('StoreAccountComponent', () => {
  let component: StoreAccountComponent;
  let fixture: ComponentFixture<StoreAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
