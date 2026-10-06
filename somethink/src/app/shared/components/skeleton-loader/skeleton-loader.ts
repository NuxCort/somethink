import { Component, input } from '@angular/core';
import { CursorType } from '@app/shared/types/custom-types';

@Component({
  selector: 'skeleton-loader',
  templateUrl: './skeleton-loader.html',
  styleUrls: ['./skeleton-loader.scss'],
  host: {
    '[style.--cursor]': 'cursor()',
  },
  standalone: true,
})
export class SkeletonLoader {
  public readonly width = input<number>(200);
  public readonly height = input<number>(200);
  public readonly cursor = input<CursorType>('pointer');
}
