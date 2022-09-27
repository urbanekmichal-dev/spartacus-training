import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomStorefrontComponent } from './custom-storefront/custom-storefront.component';
import { RouterModule } from '@angular/router';
import { GlobalMessageComponentModule, OutletModule, OutletRefModule,
PwaModule, PageLayoutModule, SeoModule, PageSlotModule } from '@spartacus/storefront'; import { AnonymousConsentsModule, FeaturesConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    CustomStorefrontComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    GlobalMessageComponentModule, 
    OutletModule, 
    OutletRefModule,
    PwaModule,
    PageLayoutModule,
    SeoModule,
    PageSlotModule, 
    AnonymousConsentsModule, 
    FeaturesConfigModule
  ],
  exports : [CustomStorefrontComponent]
})
export class ExerciseInternalsModule { }
