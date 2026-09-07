import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'image-block',
  templateUrl: 'image.html',
  styleUrl: 'image.scss',
  standalone: true,
  imports: [],
})
export class ImageBlockComponent {
  /** Image format is required */
  public readonly imageName = input<string>('');
  public readonly width = input<number>(0);
  public readonly height = input<number>(0);

  protected readonly imageUrl = computed<string>(() => `@app/shared/assets/svg/${this.imageName()}`);
}
