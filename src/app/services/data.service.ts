import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data/products.json');
  }

  setProduct(product: Product) {
    this.selectedProducts.push(product);
  }

  getSelectedProducts(): Product[] {
    return this.selectedProducts;
  }
}
