import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { PromoComponent } from './promo/promo.component';
import { PromoS1Component } from './promo-s1/promo-s1.component';
import { PromoS2Component } from './promo-s2/promo-s2.component';
import { PromoS3Component } from './promo-s3/promo-s3.component';
import { PromoS4Component } from './promo-s4/promo-s4.component';


@NgModule({
  declarations: [
    PromoComponent,
    PromoS1Component,
    PromoS2Component,
    PromoS3Component,
    PromoS4Component
  ],
  imports: [
    CommonModule,
    PromoRoutingModule
  ]
})
export class PromoModule { }
