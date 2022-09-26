import { Component, OnInit } from '@angular/core';
import { ActiveCartService, Cart, TranslationService } from '@spartacus/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-display-i18n-messages',
  templateUrl: './display-i18n-messages.component.html',
  styleUrls: ['./display-i18n-messages.component.scss']
})
export class DisplayI18nMessagesComponent implements OnInit {

  cart$: Observable<Cart>;
  today: number;
  private deliveryItemsQuantity: number | undefined = 0;
  componentMessage$: Observable<string> = of("");
  

  constructor(protected activeCartService: ActiveCartService, private translationService: TranslationService) {
    this.cart$ = this.activeCartService.getActive();
    this.today = Date.now();

    this.cart$.subscribe(cart => {
      this.deliveryItemsQuantity=cart.deliveryItemsQuantity;
      this.componentMessage$=this.translationService.translate('miniCart.item' , {count: this.deliveryItemsQuantity});
    });
    
   }

  ngOnInit(): void {
  }

}
