import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-name',
  templateUrl: './room-name.component.html',
  styleUrls: ['./room-name.component.css']
})
export class RoomNameComponent implements OnInit {
  joined = false;

  RoomName: string;

  constructor() { }


  onSubmit(roomName: any) {
    this.RoomName = roomName;
    this.joined = true;
    //console.log('Name = ' + name);
  }


  ngOnInit() {
  }

}
