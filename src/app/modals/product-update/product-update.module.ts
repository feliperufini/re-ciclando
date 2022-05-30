import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductUpdatePageRoutingModule } from './product-update-routing.module';

import { ProductUpdatePage } from './product-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductUpdatePageRoutingModule
  ],
  declarations: [ProductUpdatePage]
})
export class ProductUpdatePageModule {}
