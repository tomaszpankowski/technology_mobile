import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service/service.component';
import { ServiceS1Component } from './service-s1/service-s1.component';
import { ServiceS2Component } from './service-s2/service-s2.component';
import { ServiceS3Component } from './service-s3/service-s3.component';
import { ServiceS4Component } from './service-s4/service-s4.component';


@NgModule({
  declarations: [
    ServiceComponent,
    ServiceS1Component,
    ServiceS2Component,
    ServiceS3Component,
    ServiceS4Component
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
