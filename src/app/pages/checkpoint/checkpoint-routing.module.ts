import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckpointPage } from './checkpoint.page';

const routes: Routes = [
  {
    path: '',
    component: CheckpointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckpointPageRoutingModule {}
