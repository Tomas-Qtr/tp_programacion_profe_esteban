import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';

//importamos librerias de FireStore y el servicio Cafe
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import {CafesService} from '../../servicios/cafes.service';
//nodulos de primeng
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TriStateCheckboxModule
  ],
  providers: [CafesService]
})
export class AdminModule { }
