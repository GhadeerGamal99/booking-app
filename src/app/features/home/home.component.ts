import { Component } from '@angular/core';
import {SearchBoxComponent} from "../../features/home/ui-components/search-box/search-box.component";
import { RoomsListComponent } from './ui-components/rooms-list/rooms-list.component';
import { RoomAdsComponent } from './ui-components/room-ads/room-ads.component';
import { RoomAds } from '../../models/room-ads.model';


@Component({
  selector: 'app-home',
  imports: [SearchBoxComponent,RoomsListComponent,RoomAdsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  roomAds: RoomAds =
    {
    roomName: "Premium Room Sea View",
    roomImg: ["assets/images/room_1.jpg","assets/images/room_2.png","assets/images/room_3.jpg"],
    roomType: 1,
    roomCount: 6,
    roomContents: ["Balcony","Free WIFI","2 Beds","Air Conditioning","Hair Dryer"]
  }
}
