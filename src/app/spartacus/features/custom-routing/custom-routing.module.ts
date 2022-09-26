import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';
import { staticRoutes } from './static-page/custom-static-routes';
import { ConfigModule, OccConfig, PRODUCT_NORMALIZER, RoutingConfig, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { ProductPrettyNameNormalizer } from './custom-routes/product-name.normalizer';



@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule.forChild(staticRoutes),
    ConfigModule.withConfig({
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:productCode/:prettyName',
              'product/:productCode/:name',
            ]
          }
        }
      }
    } as RoutingConfig),
    ConfigModule.withConfig({
      backend: {
        occ: {
          endpoints: {
            productSearch: 
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          }
        }
      }
    }as OccConfig)
  ],
  providers: [
    {
    provide: PRODUCT_NORMALIZER,
    useExisting: ProductPrettyNameNormalizer,
    multi: true,
    }
  ],
  exports: [RouterModule],
})
export class CustomRoutingModule { }
