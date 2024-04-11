import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ListProductsComponent } from 'src/app/components/list-products/list-products.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { CartComponent } from 'src/app/components/cart/cart.component';

@NgModule({
  declarations: [ListProductsComponent, HomeComponent, CartComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
