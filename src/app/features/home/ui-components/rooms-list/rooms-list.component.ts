import { Component } from '@angular/core';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { roomData } from '../../../../models/room.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule,RoomDetailsComponent],
  standalone: true,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})

export class RoomsListComponent {
   rooms: roomData[] = [
    {
      parkingStatus: "Free self parking",
      cancellationStatus: "Free cancellation before",
      cancellationDate: new Date("2025-02-16"),
      childCount: 2,
      adultCount: 3,
      rentAmount: 199,
      taxesStatus: "Includes taxes & fees",
      breakfastIncluded: false,
      roomSelectedCount: 0
    },
    {
      parkingStatus: "Free self parking",
      cancellationStatus: "Free cancellation before",
      cancellationDate: new Date("2025-01-01"),
      childCount: 1,
      adultCount: 1,
      rentAmount: 209,
      taxesStatus: "Includes taxes & fees",
      breakfastIncluded: true,
      roomSelectedCount: 1
    },
    {
      parkingStatus: "Free self parking",
      cancellationStatus: "Free cancellation before",
      cancellationDate: new Date("2025-03-01"),
      childCount: 3,
      adultCount: 3,
      rentAmount: 199,
      taxesStatus: "Includes taxes & fees",
      breakfastIncluded: true,
      roomSelectedCount: 3
    },
   ]


}
