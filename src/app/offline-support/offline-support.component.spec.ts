import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineSupportComponent } from './offline-support.component';

describe('OfflineSupportComponent', () => {
  let component: OfflineSupportComponent;
  let fixture: ComponentFixture<OfflineSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
