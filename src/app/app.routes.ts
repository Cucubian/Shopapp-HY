import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DetailProduct } from './detail-product/detail-product';
import { Oder } from './oder/oder';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product-detail', component: DetailProduct},
  { path: 'oder', component: Oder}
  
];