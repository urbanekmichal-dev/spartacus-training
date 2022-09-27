import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConverterService, Product, ProductAdapter, PRODUCT_NORMALIZER, ScopedProductData } from "@spartacus/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BestbuyProductAdapter implements ProductAdapter{

    constructor(
        protected http: HttpClient,
        protected converter: ConverterService
    ){}

    load(productCode: string): Observable<Product> {
        return this.http.get('assets/bestbuy-sku-6202761.json')
        .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }
}
