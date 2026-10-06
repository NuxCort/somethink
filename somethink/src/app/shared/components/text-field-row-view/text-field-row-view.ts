import { Component, input } from '@angular/core';
import { TextFieldView } from '@app/shared/components/text-field-view/text-field-view';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';

@Component({
  imports: [TextFieldView, FlexBlock],
  selector: 'text-field-row-view',
  templateUrl: './text-field-row-view.html',
  standalone: true,
})
export class TextFieldRowView {
  public readonly title = input<string>('');
  public readonly text = input<string>('');
}
