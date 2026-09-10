import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      {
        path: 'main-base',
        loadComponent: (() => (import('@app/sections/main-base').then(m => m.MainBaseComponent))),
      },
    ],
  },
];
