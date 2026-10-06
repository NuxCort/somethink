import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('@app/sections/main-base').then((m) => m.MainBaseComponent),
      },
      {
        path: 'auth',
        loadComponent: () => import('@app/sections/auth/auth').then((m) => m.Auth),
      },
    ],
  },
] as const;
