import { Component } from '@angular/core';
import { HeaderBase } from '@app/sections/header/components/header.base';

@Component({
  selector: 'main-base',
  imports: [HeaderBase],
  template: `<header-base />`,
})
export class MainBaseComponent {}
