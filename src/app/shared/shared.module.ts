import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';

import { CompanyBannerComponent } from './company-banner/company-banner.component';
import { CompanyNavbarComponent } from './company-navbar/company-navbar.component';
import { CheckoutItemCatalogueComponent } from './checkout-item-catalogue/checkout-item-catalogue.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { BannerComponent } from './Xcomponents/banner/banner.component';
import { ShaubsFormComponent } from './Xcomponents/shaubs-form/shaubs-form.component';
import { SearchBoxComponent } from './Xcomponents/search-box/search-box.component';
import { ItemConfigCatalogueComponent } from './item-config-catalogue/item-config-catalogue.component';
import { FormsModule } from '@angular/forms';
import { ImageCatalogueComponent } from './imageCatalogue/imageCatalogue.component';


@NgModule({
  declarations: [
    CompanyBannerComponent,
    CompanyNavbarComponent,
    CheckoutItemCatalogueComponent,
    AdBannerComponent,
    ItemConfigCatalogueComponent,
    ImageCatalogueComponent,
    BannerComponent,
    ShaubsFormComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    CompanyBannerComponent,
    CompanyNavbarComponent,
    CheckoutItemCatalogueComponent,
    AdBannerComponent,
    BannerComponent,
    ShaubsFormComponent,
    SearchBoxComponent,
    ItemConfigCatalogueComponent,
    ImageCatalogueComponent,
    CommonModule,
    FormsModule
  ],
})
export class SharedModule { }
