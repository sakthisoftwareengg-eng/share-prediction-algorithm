import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  return authService.isLoggedIn().pipe(
    take(1),
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true; // User is logged in allow access to user
      } else {
        router.navigate(['/login']); // User is not logged in redirect to login
        return false;
      }
    })
  );
};
