import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpatientNavigationComponent } from './newpatient-navigation.component';

describe('NewpatientNavigationComponent', () => {
  let component: NewpatientNavigationComponent;
  let fixture: ComponentFixture<NewpatientNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpatientNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpatientNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
