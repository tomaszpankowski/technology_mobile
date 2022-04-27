import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceS1Component } from './service-s1.component';

describe('ServiceS1Component', () => {
  let component: ServiceS1Component;
  let fixture: ComponentFixture<ServiceS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
