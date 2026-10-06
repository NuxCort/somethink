import { Component } from '@angular/core';
import { VideoBase } from '@app/sections/video/video-base.component';

@Component({
  selector: 'main-base',
  template: `
    <video-base />
  `,
  standalone: true,
  imports: [VideoBase],
})
export class MainBaseComponent {}
