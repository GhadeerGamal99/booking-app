import { Component, Input } from '@angular/core';
import { RoomAds } from '../../../../models/room-ads.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-ads',
  imports: [CommonModule],
  standalone: true,
  templateUrl:'./room-ads.component.html',
  styleUrl: './room-ads.component.scss'
})
export class RoomAdsComponent {
   @Input() roomAdsData: RoomAds = {} as RoomAds
}
