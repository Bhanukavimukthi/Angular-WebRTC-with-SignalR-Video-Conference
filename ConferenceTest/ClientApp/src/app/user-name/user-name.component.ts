import { Component, OnInit } from '@angular/core';
import { invokable_initVideoconference } from '../signalr.service';

@Component({
  selector: 'app-rtc',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  //userName = '';

  joined = false;

  roomName = 'Test1';

  constructor(/*private signalrservice: SignalrService*/) { }


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
