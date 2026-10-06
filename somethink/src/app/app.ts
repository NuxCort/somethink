import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBase } from '@app/sections/header/components/header.base';

@Component({
  selector: 'app-root',
  template: `
    <header-base />
    <router-outlet />
  `,
  standalone: true,
  imports: [RouterOutlet, HeaderBase],
})
export class App {}
