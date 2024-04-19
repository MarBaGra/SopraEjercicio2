import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/modules/home/components/cart/cart.component';
import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SaveSuccessComponent } from './components/save-success/save-success.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'saveSuccess',
    component: SaveSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
