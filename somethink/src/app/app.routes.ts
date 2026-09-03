import { Routes } from '@angular/router';
import {TestComp} from './sections/components/test-comp/test-comp';
import {App} from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      {
        path: 'test',
        component: TestComp,
      }
    ]
  }
];
