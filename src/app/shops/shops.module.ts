import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from '../angular-material.module';
import { bagBigShelfComponent } from './bagBig/bagBig-shelf/bagBig-shelf.component';
import { bagBigShopFrontComponent } from './bagBig/bagBig-shop-front/bagBig-shop-front.component';
import { FlossmeterShelfComponent } from './flossmeter/flossmeter-shelf/flossmeter-shelf.component';
import { FlossmeterShopFrontComponent } from './flossmeter/flossmeter-shop-front/flossmeter-shop-front.component';
import { ImageWallComponent } from './flossmeter/image-wall/image-wall.component';



@NgModule({
  declarations: [
    bagBigShelfComponent,
    bagBigShopFrontComponent,
    FlossmeterShelfComponent,
    FlossmeterShopFrontComponent,
    ImageWallComponent

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModule,
  ],
  exports: [

  ]
})
export class ShopsModule { }
