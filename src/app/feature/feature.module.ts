import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { EnrutableComponent } from './enrutable/enrutable.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports: [ EnrutableComponent ],
  declarations: [EnrutableComponent]
})
export class FeatureModule { }
