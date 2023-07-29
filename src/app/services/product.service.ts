import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private base_URL: string;
  private base_API: string;

  constructor(private http: HttpClient) {
    this.base_URL = 'http://localhost:3000/';
    this.base_API = 'api/products';
  }

  /* GET (all) */
  getListProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base_URL}${this.base_API}`);
  }

  /* GET BY ID */

  /* POST */

  /* PUT */

  /* DELETE */
}
