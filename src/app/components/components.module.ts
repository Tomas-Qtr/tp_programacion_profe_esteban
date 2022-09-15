import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { CafesService } from '../servicios/cafes.service';
import {CardModule} from 'primeng/card';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    BannerComponent,
    CardComponent,
    GaleriaComponent,
    CardNewsComponent,
    ContactComponent
    ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    BannerComponent,
    CardComponent,
    GaleriaComponent
  ],
  providers:[
    CafesService,
    

  ]
 
})
export class ComponentsModule { }
