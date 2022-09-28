import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysManageComponent } from './holidays-manage.component';

describe('HolidaysManageComponent', () => {
  let component: HolidaysManageComponent;
  let fixture: ComponentFixture<HolidaysManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
