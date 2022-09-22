import { Component, OnInit } from '@angular/core';
import { isNotNullable, Product } from '@spartacus/core';
import { CurrentProductService, OutletPosition, ProductDetailOutlets } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'app-exercise-outlet',
  templateUrl: './exercise-outlet.component.html',
  styleUrls: ['./exercise-outlet.component.scss']
})
export class ExerciseOutletComponent implements OnInit {
  
  before: OutletPosition = OutletPosition.BEFORE;

  private product$:Observable<Product> = this.currentProductService.getProduct().pipe(filter(isNotNullable))

  availableForPickup$: Observable<boolean> = this.product$.pipe(
    map(product=>!!product.availableForPickup)
  )

  isSelectedBrand$: Observable<boolean> = this.hasBrand('canon')

  pdpOutlets = ProductDetailOutlets;

  constructor(
    private currentProductService: CurrentProductService
  ) { }

  ngOnInit(): void {
  }

  hasBrand(brand: string) : Observable<boolean>{
    return this.product$.pipe(
      map(
        p=>
          !!p.categories?.find(c=>c.name?.toLowerCase()===brand.toLocaleLowerCase())
      )
    )
  }
}
