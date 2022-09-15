import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

// PRIMENG

import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { ReactiveFormsModule} from '@angular/forms'
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    TriStateCheckboxModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
