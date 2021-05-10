import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BagComponent } from './bag/bag.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    HomeComponent,
    BagComponent,
    NavbarComponent,
    MobileNavbarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
  ],
  exports: [HomeComponent,
    BagComponent,
    NavbarComponent,
    MobileNavbarComponent

  ]
})
export class FeaturesModule { }
