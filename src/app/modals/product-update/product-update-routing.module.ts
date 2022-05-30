import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductUpdatePage } from './product-update.page';

const routes: Routes = [
  {
    path: '',
    component: ProductUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductUpdatePageRoutingModule {}
