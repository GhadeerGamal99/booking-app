import { Component } from '@angular/core';
import {SearchBoxComponent} from "../../features/home/ui-components/search-box/search-box.component";
import { RoomsListComponent } from './ui-components/rooms-list/rooms-list.component';
import { RoomAdsComponent } from './ui-components/room-ads/room-ads.component';


@Component({
  selector: 'app-home',
  imports: [SearchBoxComponent,RoomsListComponent,RoomAdsComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
