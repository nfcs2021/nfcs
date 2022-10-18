import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontdesklistComponent } from './frontdesklist.component';

describe('FrontdesklistComponent', () => {
  let component: FrontdesklistComponent;
  let fixture: ComponentFixture<FrontdesklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontdesklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontdesklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
