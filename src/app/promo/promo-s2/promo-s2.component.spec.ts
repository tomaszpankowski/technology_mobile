import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoS2Component } from './promo-s2.component';

describe('PromoS2Component', () => {
  let component: PromoS2Component;
  let fixture: ComponentFixture<PromoS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
