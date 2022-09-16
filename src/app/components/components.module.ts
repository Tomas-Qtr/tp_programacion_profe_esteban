import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { CafesService } from '../servicios/cafes.service';
import {CardModule} from 'primeng/card';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CardNewService } from '../servicios/card-new.service';


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
    CardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    BannerComponent,
    CardComponent,
    GaleriaComponent,
    CardNewsComponent
  ],
  providers:[
    CafesService,
    CardNewService
  ]
 
})
export class ComponentsModule { }
