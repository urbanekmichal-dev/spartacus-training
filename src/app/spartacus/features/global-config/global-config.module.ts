import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayConfigComponent } from './display-config/display-config.component';



@NgModule({
  declarations: [
    DisplayConfigComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DisplayConfigComponent]
})
export class GlobalConfigModule { }
