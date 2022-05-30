import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckpointPageRoutingModule } from './checkpoint-routing.module';

import { CheckpointPage } from './checkpoint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckpointPageRoutingModule
  ],
  declarations: [CheckpointPage]
})
export class CheckpointPageModule {}
