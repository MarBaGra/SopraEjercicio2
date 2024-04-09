import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AboutProductsDescriptionComponent } from './components/about-products-description/about-products-description.component';
import { AboutTeamDescriptionComponent } from './components/about-team-description/about-team-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    AboutComponent,
    HomeComponent,
    AboutProductsDescriptionComponent,
    AboutTeamDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
