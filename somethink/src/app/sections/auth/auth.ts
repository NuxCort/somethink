import { Component } from '@angular/core';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { TextFieldRowView } from '@app/shared/components/text-field-row-view/text-field-row-view';

@Component({
  selector: 'auth',
  styleUrl: './auth.scss',
  templateUrl: './auth.html',
  standalone: true,
  imports: [FlexBlock, TextFieldRowView],
})
export class Auth {}
