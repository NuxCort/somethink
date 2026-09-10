import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'text-field-view',
  styleUrl: './text-field-view.scss',
  templateUrl: './text-field-view.html',
  standalone: true,
  host: {
    '[style.--font-size]': 'fontSize()',
    '[style.--font-weight]': 'fontWeight()',
  },
})
export class TextFieldView {
  public readonly fontSize = input<string>('14px');
  public readonly fontWeight = input<string>('normal');
}
