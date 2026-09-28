import { Component } from '@angular/core';
import { HeaderBase } from '@app/sections/header/components/header.base';
import { VideoBase } from '@app/sections/video/video-base.component';

@Component({
  selector: 'main-base',
  imports: [HeaderBase, VideoBase],
  template: `
    <header-base />
    <video-base />
  `,
})
export class MainBaseComponent {}
