import { Component, OnInit, Input } from '@angular/core';
import { invokable_initVideoconference } from '../signalr.service';
import { RoomNameComponent } from '../room-name/room-name.component';

@Component({
  selector: 'app-rtc',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  //userName = '';

  joined = false;
  roomName: string;
  @Input() RoomName: string;

  constructor() {
    this.roomName = this.RoomName;
  }


  ngOnInit() {
    //alert('fdsfsdfs');
  }


  onSubmit(userName: any) {
       invokable_initVideoconference(this.roomName, userName);
    this.joined = true;

    //console.log('Name = ' + name);
  }

 // connect() {
 ////   this.signalrservice.invokable_initVideoconference(this.roomName, this.userName);
 //   this.joined = true;
 // }
  trackByFn() {
   
  }

}
