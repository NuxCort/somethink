import { Component } from '@angular/core';
import { Logo } from '@app/sections/header/components/logo/logo';
import { Search } from '@app/sections/header/components/search/search';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { Menu } from '@app/sections/header/components/menu/menu';

@Component({
  selector: 'header-base',
  template: `
    <flex-block class="header">
      <app-logo />
      <flex-block flexJustifyContent="flex-end" flexAlignSelf="center" [gap]="14">
        <app-menu />
        <app-search />
      </flex-block>
    </flex-block>
  `,
  styleUrls: ['./header-base.scss'],
  standalone: true,
  imports: [Logo, Search, FlexBlock, Menu],
})
export class HeaderBase {}
