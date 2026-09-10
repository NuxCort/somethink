import { Component, inject } from '@angular/core';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { TextFieldView } from '@app/shared/components/text-field-view/text-field-view';
import { TextFieldInput } from '@app/shared/components/text-field-input/text-field-input';
import { HeaderSearchFormFactoryService } from '@app/sections/header/services/header-search-form-factory.service';

@Component({
  imports: [ FlexBlock, TextFieldView, TextFieldInput],
  selector: 'app-search',
  styleUrl: './search.scss',
  templateUrl: './search.html',
  standalone: true,
})
export class Search {
  protected readonly headerSearchFormFactoryService = inject(HeaderSearchFormFactoryService);
}
