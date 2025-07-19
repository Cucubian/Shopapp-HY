import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DetailProduct } from './detail-product/detail-product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product-detail', component: DetailProduct}
  
];