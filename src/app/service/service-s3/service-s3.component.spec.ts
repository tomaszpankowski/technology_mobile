import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceS3Component } from './service-s3.component';

describe('ServiceS3Component', () => {
  let component: ServiceS3Component;
  let fixture: ComponentFixture<ServiceS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
