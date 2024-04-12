import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/common/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  selectedProducts!: Product[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getSelectedProducts();
  }

  public getSelectedProducts() {
    this.selectedProducts = this.dataService.getCartSelectedProducts();
  }

  public deleteProduct(product: Product) {
    this.selectedProducts = this.dataService.deleteCartProduct(product);
  }
}
