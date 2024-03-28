import { Component } from '@angular/core';
import { products } from 'src/app/products';
import { Product } from 'src/app/common/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productTitle!: string;
  img!: string;
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

  ngOnInit(): void {
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

  public deleteProduct() {
    for (let i = 0; i < this.productsFinal.length; i++) {
      if (this.productsFinal[i].product == this.productTitle) {
        this.productTitle = '';
        this.img = '';
        this.price = 0;

        this.productsFinal.splice(
          this.productsFinal.indexOf(this.productsFinal[i]),
          1
        );

        console.log(this.productsFinal);
      }
    }
  }
}
