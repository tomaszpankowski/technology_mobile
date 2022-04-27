import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoS1Component } from './promo-s1.component';

describe('PromoS1Component', () => {
  let component: PromoS1Component;
  let fixture: ComponentFixture<PromoS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
