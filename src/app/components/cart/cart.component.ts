import { Component } from '@angular/core';
import { Product } from 'src/app/common/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  selectedProducts!: Product[];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getSelectedProducts();
  }

  public getSelectedProducts() {
    this.selectedProducts = this.cartService.getCartSelectedProducts();
  }

  public deleteProduct(product: Product) {
    this.selectedProducts = this.cartService.deleteCartProduct(product);
  }
}
