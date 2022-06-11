import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerPageRoutingModule } from './worker-routing.module';

import { WorkerPage } from './worker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerPageRoutingModule
  ],
  declarations: [WorkerPage]
})
export class WorkerPageModule {}
