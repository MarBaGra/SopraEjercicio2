import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from 'src/app/components/about/about.component';
import { AboutProductsDescriptionComponent } from 'src/app/components/about-products-description/about-products-description.component';
import { AboutTeamDescriptionComponent } from 'src/app/components/about-team-description/about-team-description.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutProductsDescriptionComponent,
    AboutTeamDescriptionComponent,
  ],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
