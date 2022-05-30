import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipPage } from './tip.page';

const routes: Routes = [
  {
    path: '',
    component: TipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipPageRoutingModule {}
