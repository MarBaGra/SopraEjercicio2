import { Component, EventEmitter, Output } from '@angular/core';
import { products } from 'src/app/products';
import { Product } from 'src/app/common/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  @Output() onChangeProduct = new EventEmitter<Product>();
  @Output() onFilter = new EventEmitter();
  @Output() onResetFilter = new EventEmitter();

  productsFinal: Product[] = products;

  productTitle!: string;
  img!: string;
  price!: number;
  productDescription!: string;
  simmilarProduct1!: string;
  simmilarProduct2!: string;
  similarPrice1!: number;
  similarPrice2!: number;
  similarImg1!: string;
  similarImg2!: string;
  reviewImg1!: string;
  reviewName1!: string;
  isCheck!: boolean;

  public filter() {
    this.isCheck = !this.isCheck;
    this.onFilter.emit();
  }

  public resetFilter() {
    this.isCheck = false;
    this.onResetFilter.emit();
  }

  public changeProduct(p: Product) {
    this.onChangeProduct.emit(p);
  }
}
