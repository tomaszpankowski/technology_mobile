import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceS4Component } from './service-s4.component';

describe('ServiceS4Component', () => {
  let component: ServiceS4Component;
  let fixture: ComponentFixture<ServiceS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
