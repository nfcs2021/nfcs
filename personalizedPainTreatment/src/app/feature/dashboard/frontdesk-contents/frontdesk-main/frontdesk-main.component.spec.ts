import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdeskMainComponent } from './frontdesk-main.component';

describe('FrontdeskMainComponent', () => {
  let component: FrontdeskMainComponent;
  let fixture: ComponentFixture<FrontdeskMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdeskMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdeskMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
