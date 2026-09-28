import { Component } from '@angular/core';
import { ImageBlockComponent } from '@app/shared/components/image-block/image';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { TextFieldView } from '@app/shared/components/text-field-view/text-field-view';

@Component({
  imports: [ImageBlockComponent, FlexBlock, TextFieldView],
  selector: 'app-logo',
  styleUrl: './logo.scss',
  templateUrl: './logo.html',
})
export class Logo {}
