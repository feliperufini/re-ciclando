import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipPageRoutingModule } from './tip-routing.module';

import { TipPage } from './tip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipPageRoutingModule
  ],
  declarations: [TipPage]
})
export class TipPageModule {}
