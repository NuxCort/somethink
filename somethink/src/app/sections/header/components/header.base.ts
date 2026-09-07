import { Component } from '@angular/core';
import { Logo } from '@app/sections/header/components/logo/logo';

@Component({
  selector: 'header-base',
  template: `<app-logo />`,
  standalone: true,
  imports: [Logo],
})
export class HeaderBase {}
