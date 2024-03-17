import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyRequestFormComponent } from './emergency-request-form.component';

describe('EmergencyRequestFormComponent', () => {
  let component: EmergencyRequestFormComponent;
  let fixture: ComponentFixture<EmergencyRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
