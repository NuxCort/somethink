import { Component } from '@angular/core';
import { FlexBlock } from '@app/shared/components/flex-block/flex-block';
import { SkeletonLoader } from '@app/shared/components/skeleton-loader/skeleton-loader';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FlexBlock, SkeletonLoader, RouterLink],
  selector: 'video-tile',
  styleUrl: './video-tile.scss',
  templateUrl: './video-tile.html',
})
export class VideoTile {
  mockVideosLinks = [
    { id: '1', url: 'qwe1' },
    { id: '2', url: 'qwe2' },
    { id: '3', url: 'qwe3' },
    { id: '4', url: 'qwe4' },
    { id: '5', url: 'qwe5' },
    { id: '6', url: 'qwe6' },
    { id: '7', url: 'qwe7' },
    { id: '8', url: 'qwe8' },
    { id: '9', url: 'qwe9' },
    { id: '10', url: 'qwe10' },
  ];
}
