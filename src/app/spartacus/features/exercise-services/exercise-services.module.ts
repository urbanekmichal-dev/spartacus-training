import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponentService } from '@spartacus/storefront';
import { CustomSearchBoxComponentService } from './custom-search-box-component.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: SearchBoxComponentService,
      useClass: CustomSearchBoxComponentService
    }
  ]
})
export class ExerciseServicesModule { }
