import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMetaResolver } from '@spartacus/core';
import { LoginPageMetaResolver } from './login-page-meta-resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: PageMetaResolver,
      useClass: LoginPageMetaResolver,
      multi: true
    }
  ]
})
export class ExerciseSeoModule { }
