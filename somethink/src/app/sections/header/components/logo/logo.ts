import { Component } from '@angular/core';
import { ImageBlockComponent } from '@app/shared/components/image-block/image';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { TextFieldView } from '@app/shared/components/text-field-view/text-field-view';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
  standalone: true,
  imports: [ImageBlockComponent, FlexBlock, TextFieldView],
})
export class Logo {}
