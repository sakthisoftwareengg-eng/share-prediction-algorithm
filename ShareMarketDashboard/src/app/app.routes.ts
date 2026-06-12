import { Routes } from '@angular/router';

import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'prefix' },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
    { path: 'login', component: Login },
];
