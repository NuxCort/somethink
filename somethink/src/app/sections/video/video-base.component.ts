import { Component } from '@angular/core';
import { VideoTile } from '@app/sections/video/components/video-tile/video-tile';

@Component({
  selector: 'video-base',
  template: ` <video-tile /> `,
  imports: [VideoTile],
})
export class VideoBase {}
