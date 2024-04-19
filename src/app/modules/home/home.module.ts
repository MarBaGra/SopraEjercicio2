import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ListProductsComponent } from 'src/app/modules/home/components/list-products/list-products.component';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { CartComponent } from 'src/app/modules/home/components/cart/cart.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveSuccessComponent } from './components/save-success/save-success.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    HomeComponent,
    CartComponent,
    FormComponent,
    SaveSuccessComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
})
export class HomeModule {}
