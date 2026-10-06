import { Component, computed, input } from '@angular/core';
import { CursorType } from '@app/shared/types/custom-types';

@Component({
  selector: 'image-block',
  templateUrl: 'image.html',
  styleUrl: 'image.scss',
  standalone: true,
  host: {
    '[style.--cursor]': 'cursor()',
  },
})
export class ImageBlockComponent {
  /** Is required */
  public readonly imageName = input<string>('skeleton-logo.svg');
  public readonly size = input<number>(0);
  public readonly cursor = input<CursorType>('none');

  protected readonly imageUrl = computed<string>(() => `assets/svg/${this.imageName()}`);
}
