import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page/static-page.component';
import { staticRoutes } from './static-page/custom-static-routes';
import { UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule.forChild(staticRoutes),
  ]
})
export class CustomRoutingModule { }
