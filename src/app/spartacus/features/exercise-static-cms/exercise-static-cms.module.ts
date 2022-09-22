import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsStructureConfig, ConfigModule } from '@spartacus/core';
import { layoutConfig } from './layout.config';
import { staticCmsConfig } from './static-cms.config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(staticCmsConfig as CmsStructureConfig),
    ConfigModule.withConfig(layoutConfig),
  ]
})
export class ExerciseStaticCmsModule { }
