import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'image-block',
  templateUrl: 'image.html',
  standalone: true,
})
export class ImageBlockComponent {
  /** Is required */
  public readonly imageName = input<string>('skeleton-logo.svg');
  public readonly size = input<number>(0);

  protected readonly imageUrl = computed<string>(() => `assets/svg/${this.imageName()}`);
}
