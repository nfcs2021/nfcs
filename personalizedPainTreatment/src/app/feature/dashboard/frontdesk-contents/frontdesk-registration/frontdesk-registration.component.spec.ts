import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskRegistrationComponent } from './frontdesk-registration.component';

describe('FrontdeskRegistrationComponent', () => {
  let component: FrontdeskRegistrationComponent;
  let fixture: ComponentFixture<FrontdeskRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdeskRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdeskRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
