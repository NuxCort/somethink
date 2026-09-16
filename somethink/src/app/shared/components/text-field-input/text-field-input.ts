import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextFieldView } from '@app/shared/components/text-field-view/text-field-view';

@Component({
  imports: [ReactiveFormsModule, TextFieldView],
  selector: 'text-field-input',
  styleUrl: './text-field-input.scss',
  templateUrl: './text-field-input.html',
})
export class TextFieldInput {
  public readonly control = input<FormControl<unknown>>(new FormControl(''));
  public readonly type = input<string>('text');
  public readonly placeholder = input<string>('Type something...');
}
