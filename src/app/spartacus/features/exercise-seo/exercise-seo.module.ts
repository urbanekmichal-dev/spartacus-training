import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageMetaResolver, PageMetaResolver } from '@spartacus/core';
import { LoginPageMetaResolver } from './login-page-meta-resolver';
import { CustomContentPageMetaResolver } from './custom-content-page-meta.resolver';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // {
    //   provide: PageMetaResolver,
    //   useClass: LoginPageMetaResolver,
    //   multi: true
    // }
    {
      provide: ContentPageMetaResolver,
      useClass: CustomContentPageMetaResolver
    }
  ]
})
export class ExerciseSeoModule { }
