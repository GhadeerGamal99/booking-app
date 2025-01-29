import { Component, Input, input } from '@angular/core';
import { roomData } from '../../../../models/room.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-details',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.scss'
})
export class RoomDetailsComponent {
  @Input() room: roomData = {} as roomData; 

  get adultArray(): number[] {
    return Array(this.room?.adultCount ?? 0).fill(0);
  }
  get childArray(): number[] {
    return Array(this.room?.childCount ?? 0).fill(0);
  }
}
