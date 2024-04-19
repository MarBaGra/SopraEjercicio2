import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _product: Product[] = [];

  private readonly products: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  public products$: Observable<Product[]> = this.products.asObservable();

  constructor(private http: HttpClient) {}

  getProducts2(): void {
    this.http.get<Product[]>('/assets/data/products.json').subscribe({
      next: (jsonValue) => {
        this._product = jsonValue;
        this.products.next(this._product);
      },
      error: (error) => console.log(error),
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/data/products.json');
  }

  setCreatedProduct(product: Product) {
    this._product.push(product);
    this.products.next(this._product);
  }

  getCreatedProducts(): Product[] {
    return this._product;
  }
}
