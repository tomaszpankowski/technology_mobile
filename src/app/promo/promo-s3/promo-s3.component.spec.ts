import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoS3Component } from './promo-s3.component';

describe('PromoS3Component', () => {
  let component: PromoS3Component;
  let fixture: ComponentFixture<PromoS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
