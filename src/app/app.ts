import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { DetailProduct } from './detail-product/detail-product';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header, Footer, DetailProduct],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ShopappAG');
}
