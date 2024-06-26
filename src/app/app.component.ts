import { Component } from '@angular/core';
import { products } from './products';
import { Product } from './common/products';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ejercicio2';
  productTitle!: string;
  img!: string;
  productsFinal: Product[] = products;
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
  reviewImg2!: string;
  reviewName2!: string;
  isCheck!: boolean;
  stars!: string[];
  rating!: number;

  ngOnInit(): void {
    this.fillData(this.productsFinal[0]);
  }

  public fillStars(rating: number): string[] {
    const fullStars = Math.trunc(rating);
    const hasHalfStar = rating % 1 > 0;
    const stars = new Array(5).fill('bi-star');

    stars.fill('bi-star-fill', 0, fullStars);

    if (hasHalfStar) stars[fullStars] = 'bi-star-half';

    return stars;
  }

  public changeRating(position: any) {
    //console.log(position);

    this.stars.fill('bi-star');
    this.stars.fill('bi-star-fill', 0, position + 1);
  }

  public getFirstProduct() {
    this.fillData(this.productsFinal[0]);
  }

  public filter() {
    for (let i = 0; i < this.productsFinal.length; i++) {
      if (this.productsFinal[i].price == 1.25) {
        this.fillData(this.productsFinal[i]);
      }
    }
  }

  public resetFilter() {
    this.getFirstProduct();
  }

  public deleteProduct() {
    for (let i = 0; i < this.productsFinal.length; i++) {
      if (this.productsFinal[i].product == this.productTitle) {
        if (this.productsFinal[i + 1]) {
          this.fillData(this.productsFinal[i + 1]);
        } else {
          this.fillData(this.productsFinal[0]);
        }

        this.productsFinal.splice(
          this.productsFinal.indexOf(this.productsFinal[i]),
          1
        );
      }
    }
  }

  public changeProduct(currentProduct: Product) {
    this.isCheck = false;
    this.fillData(currentProduct);
  }

  public checkFavorite() {
    this.isCheck = !this.isCheck;
  }

  public fillData(currentProduct: Product) {
    this.productTitle = currentProduct.product;
    this.stars = this.fillStars(currentProduct.rating);
    this.price = currentProduct.price;
    if (currentProduct.image) {
      this.img = currentProduct.image;
    }
    this.productDescription = currentProduct.description;
    this.rating = currentProduct.rating;
    if (currentProduct.similarProducts?.length) {
      this.simmilarProduct1 = currentProduct.similarProducts[0].product;
      this.simmilarProduct2 = currentProduct.similarProducts[1].product;
      this.similarPrice1 = currentProduct.similarProducts[0].price;
      this.similarPrice2 = currentProduct.similarProducts[1].price;
      if (
        currentProduct.similarProducts[0].image &&
        currentProduct.similarProducts[1].image
      ) {
        this.similarImg1 = currentProduct.similarProducts[0].image;
        this.similarImg2 = currentProduct.similarProducts[1].image;
      }
    }

    if (currentProduct.reviews?.length) {
      this.reviewImg1 = currentProduct.reviews[0].image;
      this.reviewName1 = currentProduct.reviews[0].name;
      this.reviewImg2 = currentProduct.reviews[1].image;
      this.reviewName2 = currentProduct.reviews[1].name;
    }
  }
}
