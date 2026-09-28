import { Component, inject } from '@angular/core';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { TextFieldInput } from '@app/shared/components/text-field-input/text-field-input';
import { HeaderSearchFormFactoryService } from '@app/sections/header/services/header-search-form-factory.service';

@Component({
  imports: [ FlexBlock, TextFieldInput],
  selector: 'app-search',
  templateUrl: './search.html',
})
export class Search {
  protected readonly headerSearchFormFactoryService = inject(HeaderSearchFormFactoryService);
}
