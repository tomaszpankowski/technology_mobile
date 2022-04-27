import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoS4Component } from './promo-s4.component';

describe('PromoS4Component', () => {
  let component: PromoS4Component;
  let fixture: ComponentFixture<PromoS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
