import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBannerComponent } from './custom-banner/custom-banner.component';
import { MediaModule } from '@spartacus/storefront';
import { CmsConfig,ConfigModule } from '@spartacus/core';




@NgModule({
  declarations: [
    CustomBannerComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
        },
      },
    } as CmsConfig)
  ],
  exports: [CustomBannerComponent]
})
export class ExerciseCmscomponentsModule { }
