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

  deleteProduct(product: Product): Product[] {
    this.selectedProducts.forEach((selectedProduct) => {
      if (selectedProduct == product) {
        this.selectedProducts.splice(this.selectedProducts.indexOf(product), 1);
      }
    });
    return this.selectedProducts;
  }
}
