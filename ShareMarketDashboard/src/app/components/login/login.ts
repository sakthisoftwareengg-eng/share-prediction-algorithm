
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule, MatIconModule]
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private authService: Auth, private router: Router, private cdr: ChangeDetectorRef) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.username, this.password).subscribe(
      (success) => {
        this.isLoading = false;
        if (success) {
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
        this.cdr.markForCheck(); 
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'An error occurred during login';
        console.error('Login error:', error);
        this.cdr.markForCheck(); 
      }
    );
  }
}