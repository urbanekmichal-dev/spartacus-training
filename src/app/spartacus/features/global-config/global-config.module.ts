import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayConfigComponent } from './display-config/display-config.component';
import { defaultThemeConfig } from './config/default-theme- config';
import { Config, ConfigModule } from '@spartacus/core';
import { ThemeConfig } from './config/theme-config';



@NgModule({
  declarations: [
    DisplayConfigComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig(<Config>defaultThemeConfig)
  ],
  providers :[
    {provide: ThemeConfig, useExisting: Config}
  ],
  exports:[DisplayConfigComponent]
})
export class GlobalConfigModule { }
