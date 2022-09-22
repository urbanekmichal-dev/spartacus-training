import { Component, OnInit } from '@angular/core';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-banner',
  templateUrl: './custom-banner.component.html',
  styleUrls: ['./custom-banner.component.scss']
})
export class CustomBannerComponent implements OnInit {

  data$ : Observable<CmsBannerComponent> = this.componentData.data$;

  constructor(private componentData: CmsComponentData<CmsBannerComponent>) { }

  ngOnInit(): void {
  }

}
