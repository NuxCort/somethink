import { Component } from '@angular/core';
import { ImageBlockComponent } from '@app/shared/components/image-block/image';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';

@Component({
  imports: [ImageBlockComponent, FlexBlock],
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {}
