import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestbuyProductAdapter } from './bestbuy-product-adapter';
import { ProductAdapter, PRODUCT_NORMALIZER } from '@spartacus/core';
import { BestbuyProductNormalizer } from './bestbuy-product-normalizer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ProductAdapter,
      useExisting: BestbuyProductAdapter,
    },
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: BestbuyProductNormalizer,
      multi: true
    },
  ]
})
export class ExerciseDatabindingModule { }
