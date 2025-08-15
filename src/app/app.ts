import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header, Footer, NgIf,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ShopappAG');
  private router = inject(Router);

  isRegisterPage() {
    // Chỉ ẩn header/footer ở đúng trang register
    return this.router.url.startsWith('/register');
  }
}