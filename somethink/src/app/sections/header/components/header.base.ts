import { Component } from '@angular/core';
import { Logo } from '@app/sections/header/components/logo/logo';
import { Search } from '@app/sections/header/components/search/search';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';

@Component({
  selector: 'header-base',
  template: `
    <flex-block>
      <app-logo />
      <app-search />
    </flex-block>
  `,
  styleUrls: ['./header-base.scss'],
  standalone: true,
  imports: [Logo, Search, FlexBlock],
})
export class HeaderBase {}
