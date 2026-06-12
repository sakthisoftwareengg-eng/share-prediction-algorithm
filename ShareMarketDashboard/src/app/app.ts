import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('share-market-dashboard');
  isLoggedIn: boolean = false;

  constructor(private authService: Auth) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }
  logout() {
    this.authService.logout();
  }
}