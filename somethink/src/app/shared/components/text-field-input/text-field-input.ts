import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'text-field-input',
  styleUrl: './text-field-input.scss',
  templateUrl: './text-field-input.html',
  standalone: true,
})
export class TextFieldInput {
  public readonly control = input<FormControl<unknown>>(new FormControl(''));
  public readonly type = input<string>('text');
  public readonly placeholder = input<string>('Type something...');
}
