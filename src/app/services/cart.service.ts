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
    sessionStorage.setItem('products', JSON.stringify(this.selectedProducts));
  }

  getCartSelectedProducts(): Product[] {
    return JSON.parse(sessionStorage.getItem('products') || '[]');
    //return this.selectedProducts;
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
