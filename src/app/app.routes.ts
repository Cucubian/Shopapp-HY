import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DetailProduct } from './detail-product/detail-product';
import { Oder } from './oder/oder';
import { OderConfirm } from './oder-confirm/oder-confirm';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product-detail', component: DetailProduct},
  { path: 'oder', component: Oder},
  { path: 'oder-confirm', component: OderConfirm},
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  
];