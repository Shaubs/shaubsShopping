import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './feature/bag/bag.component';
import { HomeComponent } from './feature/home/home.component';
import { bagBigShelfComponent } from './shops/bagBig/bagBig-shelf/bagBig-shelf.component';
import { bagBigShopFrontComponent } from './shops/bagBig/bagBig-shop-front/bagBig-shop-front.component';

import { FlossmeterShelfComponent } from './shops/flossmeter/flossmeter-shelf/flossmeter-shelf.component';
import { FlossmeterShopFrontComponent } from './shops/flossmeter/flossmeter-shop-front/flossmeter-shop-front.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bagBig', component: bagBigShopFrontComponent, pathMatch: 'full'
  },

  { path: 'bagBig/shelf', component: bagBigShelfComponent, pathMatch: 'full' },
  {
    path: 'flossmeter', component: FlossmeterShopFrontComponent,
    children: [{ path: 'shelf', component: FlossmeterShelfComponent, pathMatch: 'full' }]
  },
  {
    path: 'bag',
    component: BagComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
