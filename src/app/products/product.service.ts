import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "./product";
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable()
export class ProductService{
    private productsUrl = "api/Product"

    constructor(private _http: HttpClient){}

    getProducts(): Observable<Product[]>{
        return this._http.get<Product[]>(this.productsUrl);
    }

    getProductById(id: number): Observable<Product>{
        const url = `${this.productsUrl}/${id}`;
        return this._http.get<Product>(url);
    }

    createProduct(product: Product): Observable<Product>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const add = "add";
        const url = `${this.productsUrl}/${add}`;
        product.id = null;
        return this._http.post<Product>(url, product, { headers });
    }

    updateProduct(product: Product): Observable<Product>{
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const edit = "edit";
        const url = `${this.productsUrl}/${product.id}/${edit}`;
        return this._http.put<Product>(url, product, { headers })
        .pipe(
            // Return the product on an update
            map(() => product)
        );
    }

    deleteProduct(id: number): Observable<{}> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const dlt = "delete";
        const url = `${this.productsUrl}/${id}/${dlt}`;
        return this._http.delete<Product>(url, { headers });
    }
}