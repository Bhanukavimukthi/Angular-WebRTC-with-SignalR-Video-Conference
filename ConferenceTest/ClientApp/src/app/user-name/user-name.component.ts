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

  constructor() { }


  ngOnInit() {
    //alert('fdsfsdfs');
  }


  onSubmit(value: any) {
    invokable_initVideoconference(value.room, value.name);
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
