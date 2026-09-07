import { Component, input, InputSignal } from '@angular/core';
import {
  FlexAlignItems,
  FlexAlignSelf,
  FlexDirection,
  FlexJustifyContent,
} from '../../types/flex-block-types';

@Component({
  imports: [],
  selector: 'flex-block',
  styleUrl: './flex-block.scss',
  templateUrl: './flex-block.html',
  standalone: true,
  host: {
    '[style.--flex-direction]': 'flexDirection()',
    '[style.--flex-justify-content]': 'flexJustifyContent()',
    '[style.--flex-align-items]': 'flexAlignItems()',
    '[style.--flex-align-self]': 'flexAlignSelf()',
  },
})
export class FlexBlock {
  public readonly flexDirection: InputSignal<FlexDirection> = input<FlexDirection>('column');
  public readonly flexJustifyContent = input<FlexJustifyContent>('center');
  public readonly flexAlignItems = input<FlexAlignItems>('center');
  public readonly flexAlignSelf = input<FlexAlignSelf>('stretch');
}
