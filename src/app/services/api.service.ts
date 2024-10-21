import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = 'https://fakestoreapi.com/products';

  getProducts():Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this.urlBase);    
  }

  getProductById(id:number):Observable<Iproduct>{
    return this._http.get<Iproduct>(`${this.urlBase}/${id}`);    
  }
}
