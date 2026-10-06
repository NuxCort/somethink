import { Component } from '@angular/core';
import { ImageBlockComponent } from '@app/shared/components/image-block/image';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { RouterLink } from '@angular/router';
import { Routes } from '@app/app.route.constans';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  standalone: true,
  imports: [ImageBlockComponent, FlexBlock, RouterLink],
})
export class Menu {
  protected readonly Routes = Routes;
}
