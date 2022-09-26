import { Injectable } from "@angular/core";
import { BasePageMetaResolver } from "@spartacus/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root',
})
export class CustomContentPageMetaResolver extends BasePageMetaResolver{

    resolveDescription(): Observable<string> {
        return of('Custom content page meta description')
    }
}