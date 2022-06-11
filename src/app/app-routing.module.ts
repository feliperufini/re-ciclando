import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-add',
    loadChildren: () => import('./pages/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  // {
  //   path: 'product-edit/:id',
  //   loadChildren: () => import('./pages/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  // },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy/buy.module').then( m => m.BuyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'checkpoint',
    loadChildren: () => import('./pages/checkpoint/checkpoint.module').then( m => m.CheckpointPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./pages/sale/sale.module').then( m => m.SalePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sell',
    loadChildren: () => import('./pages/sell/sell.module').then( m => m.SellPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tip',
    loadChildren: () => import('./pages/tip/tip.module').then( m => m.TipPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'worker',
    loadChildren: () => import('./pages/worker/worker.module').then( m => m.WorkerPageModule)
  },
  {
    path: 'error404',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

