import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskPasswordChangeComponent } from './frontdesk-password-change.component';

describe('FrontdeskPasswordChangeComponent', () => {
  let component: FrontdeskPasswordChangeComponent;
  let fixture: ComponentFixture<FrontdeskPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdeskPasswordChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdeskPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
