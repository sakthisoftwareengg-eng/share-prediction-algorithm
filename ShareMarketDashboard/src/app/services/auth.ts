import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {
    // Check if user is already logged in
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticated.next(true);
      this.currentUser.next(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    }
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any>('assets/users.json').pipe(
      map(data => {
        const user = data.users.find((u: any) => 
          u.username === username && u.password === password
        );
        
        if (user) {
          // Store user details and jwt token in local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('authToken', 'fake-jwt-token-' + user.id);
          this.isAuthenticated.next(true);
          this.currentUser.next(user);
          return true;
        }
        return false;
      }),
      catchError(error => {
        console.error('Login error:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    this.isAuthenticated.next(false);
    this.currentUser.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser.asObservable();
  }
}