import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../product";
import { Observable } from "rxjs";
import { map } from "rxjs";

@Injectable()
export class HttpService{
    constructor (private http: HttpClient){}

    getProducts() : Observable<Product[]>{
        return this.http.get('products.json').pipe(map((data: any)=>{
            let products = data["products"];
            return products.map(function(product: any){
                return {name: product.name, count: product.count};
            });
        }));
    }
}