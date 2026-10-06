import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextFieldView } from '@app/shared/components/text-field-view/text-field-view';

@Component({
  selector: 'text-field-input',
  templateUrl: './text-field-input.html',
  styleUrl: './text-field-input.scss',
  standalone: true,
  imports: [ReactiveFormsModule, TextFieldView],
})
export class TextFieldInput {
  public readonly control = input<FormControl<unknown>>(new FormControl(''));
  public readonly type = input<string>('text');
  public readonly placeholder = input<string>('Type something...');
}
