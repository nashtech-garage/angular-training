import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutesModule } from './pages-routes.module';
import {RouterOutlet} from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
  declarations: [
  ],
  imports: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    PagesRoutesModule,
    CommonModule,
    RouterOutlet
  ]
})
export class PagesModule { }
