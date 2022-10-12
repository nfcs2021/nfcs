import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskLoginComponent } from './frontdesk-login.component';

describe('FrontdeskLoginComponent', () => {
  let component: FrontdeskLoginComponent;
  let fixture: ComponentFixture<FrontdeskLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdeskLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdeskLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
