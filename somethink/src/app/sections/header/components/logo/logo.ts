import { Component } from '@angular/core';
import { ImageBlockComponent } from '@app/shared/components/image-block/image';

@Component({
  imports: [ImageBlockComponent],
  selector: 'app-logo',
  styleUrl: './logo.scss',
  templateUrl: './logo.html',
  standalone: true,
})
export class Logo {}
