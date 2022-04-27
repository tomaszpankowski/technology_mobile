import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceS2Component } from './service-s2.component';

describe('ServiceS2Component', () => {
  let component: ServiceS2Component;
  let fixture: ComponentFixture<ServiceS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
