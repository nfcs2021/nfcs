import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskResetPasswordComponent } from './frontdesk-reset-password.component';

describe('FrontdeskResetPasswordComponent', () => {
  let component: FrontdeskResetPasswordComponent;
  let fixture: ComponentFixture<FrontdeskResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdeskResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdeskResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
