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
    //this.selectedProducts.push(product);
    let updateProducts = this.getCartSelectedProducts();
    updateProducts.push(product);
    sessionStorage.setItem('products', JSON.stringify(updateProducts));
  }

  getCartSelectedProducts(): Product[] {
    return JSON.parse(sessionStorage.getItem('products') || '[]');
  }

  deleteCartProduct(product: Product): Product[] {
    let updateProducts = this.getCartSelectedProducts();

    updateProducts.splice(updateProducts.indexOf(product), 1);

    sessionStorage.setItem('products', JSON.stringify(updateProducts));

    return updateProducts;
  }
}
