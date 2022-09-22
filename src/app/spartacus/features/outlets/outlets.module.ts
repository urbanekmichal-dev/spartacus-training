import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseOutletComponent } from './exercise-outlet/exercise-outlet.component';
import { RouterModule } from '@angular/router';
import { UrlModule } from '@spartacus/core';
import { OutletRefModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    ExerciseOutletComponent
  ],
  imports: [
    CommonModule,RouterModule,UrlModule,OutletRefModule
  ],
  exports: [ExerciseOutletComponent]
})
export class OutletsModule { }
