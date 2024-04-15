import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  selectedProducts: Product[] = [];

  constructor(private http: HttpClient) {}

  setCartProduct(product: Product) {
    this.selectedProducts.push(product);
  }

  getCartSelectedProducts(): Product[] {
    return this.selectedProducts;
  }

  deleteCartProduct(product: Product): Product[] {
    this.selectedProducts.forEach((selectedProduct) => {
      if (selectedProduct === product) {
        this.selectedProducts.splice(this.selectedProducts.indexOf(product), 1);
      }
    });
    return this.selectedProducts;
  }
}
