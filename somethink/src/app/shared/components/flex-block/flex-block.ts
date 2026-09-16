import { Component, computed, input, InputSignal } from '@angular/core';
import {
  FlexAlignItems,
  FlexAlignSelf,
  FlexDirection,
  FlexJustifyContent,
} from '../../types/flex-block-types';
import { pxToRem } from '@app/shared/utils/px-to-rem-util';

@Component({
  selector: 'flex-block',
  styleUrl: `./flex-block.scss`,
  templateUrl: './flex-block.html',
  standalone: true,
  host: {
    '[style.--flex-direction]': 'flexDirection()',
    '[style.--flex-justify-content]': 'flexJustifyContent()',
    '[style.--flex-align-items]': 'flexAlignItems()',
    '[style.--flex-align-self]': 'flexAlignSelf()',
    '[style.--gap]': 'resultGap()',
  },
})
export class FlexBlock {
  public readonly flexDirection: InputSignal<FlexDirection> = input<FlexDirection>('column');
  public readonly flexJustifyContent = input<FlexJustifyContent>('center');
  public readonly flexAlignItems = input<FlexAlignItems>('center');
  public readonly flexAlignSelf = input<FlexAlignSelf>('stretch');
  public readonly gap = input<number>(0);

  protected readonly resultGap = computed(() => pxToRem(this.gap()));
}
