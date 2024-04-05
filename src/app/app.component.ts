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
}
