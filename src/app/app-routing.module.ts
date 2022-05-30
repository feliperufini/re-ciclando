import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'product-update',
    loadChildren: () => import('./modals/product-update/product-update.module').then( m => m.ProductUpdatePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'checkpoint',
    loadChildren: () => import('./pages/checkpoint/checkpoint.module').then( m => m.CheckpointPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale/sale.module').then( m => m.SalePageModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./pages/sell/sell.module').then( m => m.SellPageModule)
  },
  {
    path: 'tip',
    loadChildren: () => import('./pages/tip/tip.module').then( m => m.TipPageModule)
  },
  {
    path: 'tip-detail',
    loadChildren: () => import('./modals/tip-detail/tip-detail.module').then( m => m.TipDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

