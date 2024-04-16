import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ejercicio2';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProducts2();
  }

  /*
  fillProduct() {
    this.dataService.getProducts2();
  }
  */
}
