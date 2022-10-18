import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskDetailsComponent } from './frontdesk-details.component';

describe('FrontdeskDetailsComponent', () => {
  let component: FrontdeskDetailsComponent;
  let fixture: ComponentFixture<FrontdeskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdeskDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdeskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
