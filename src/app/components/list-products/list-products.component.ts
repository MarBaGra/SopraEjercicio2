import { Component } from '@angular/core';
import { products } from 'src/app/products';
import { Product } from 'src/app/common/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent {
  productsFinal: Product[] = products;

  price!: number;
  simmilarProduct1!: string;
  simmilarProduct2!: string;
  similarPrice1!: number;
  similarPrice2!: number;
  similarImg1!: string;
  similarImg2!: string;
  reviewImg1!: string;
  reviewName1!: string;
  productTitle!: string;
  img!: string;

  public filter() {
    for (let i = 0; i < this.productsFinal.length; i++) {
      if (this.productsFinal[i].price == 4000) {
        this.productTitle = this.productsFinal[i].product;
        this.price = this.productsFinal[i].price;
        this.img = 'assets/7591b0999a57bf8f958c33d4bfe1b0a0.png';
      }
    }
  }

  public resetFilter() {
    this.getFirstProduct();
  }

  public getFirstProduct() {
    this.productTitle = this.productsFinal[0].product;
    this.price = this.productsFinal[0].price;
    this.img = 'assets/red-tomato-in-png.png';
    if (this.productsFinal[0].similarProducts?.length) {
      this.simmilarProduct1 = this.productsFinal[0].similarProducts[0].product;
      this.simmilarProduct2 = this.productsFinal[0].similarProducts[1].product;
      this.similarPrice1 = this.productsFinal[0].similarProducts[0].price;
      this.similarPrice2 = this.productsFinal[0].similarProducts[1].price;
    }
    this.similarImg1 = 'assets/7591b0999a57bf8f958c33d4bfe1b0a0.png';
    this.similarImg2 = 'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp';
    if (this.productsFinal[0].reviews?.length) {
      this.reviewImg1 = 'assets/images.png';
      this.reviewName1 = this.productsFinal[0].reviews[0].name;
    }
  }

  public changeProduct(p: Product) {
    this.productTitle = p.product;
    this.price = p.price;
    if (p.similarProducts?.length) {
      this.simmilarProduct1 = p.similarProducts[0].product;
      this.simmilarProduct2 = p.similarProducts[1].product;
      this.similarPrice1 = p.similarProducts[0].price;
      this.similarPrice2 = p.similarProducts[1].price;
    }

    if (p.product == 'Tomate') {
      this.img = 'assets/red-tomato-in-png.png';
      this.similarImg1 = 'assets/7591b0999a57bf8f958c33d4bfe1b0a0.png';
      this.similarImg2 =
        'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp';
      if (p.reviews?.length) {
        this.reviewImg1 = 'assets/images.png';
        this.reviewName1 = p.reviews[0].name;
      }
    }
    if (p.product == 'Coca-Cola') {
      this.img = 'assets/7591b0999a57bf8f958c33d4bfe1b0a0.png';
      this.similarImg1 =
        'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp';
      this.similarImg2 = 'assets/pr_2901_20200917095450.png';
      if (p.reviews?.length) {
        this.reviewImg1 = 'assets/marge-simpson--253x180.webp';
        this.reviewName1 = p.reviews[0].name;
      }
    }
    if (p.product == 'Powerade') {
      this.img = 'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp';
      this.similarImg1 =
        'assets/kolc-cr-pwd-avalancha-alpina-600ml-0522-lr.webp';
      this.similarImg2 = 'assets/red-tomato-in-png.png';
    }
    if (p.product == 'Juice') {
      this.img = 'assets/pr_2901_20200917095450.png';
      this.similarImg1 = '';
      this.similarImg2 = '';
      if (p.similarProducts?.length) {
        this.simmilarProduct1 = '';
        this.simmilarProduct2 = '';
        this.similarPrice1 = 0;
        this.similarPrice2 = 0;
      }
    }
  }
}
