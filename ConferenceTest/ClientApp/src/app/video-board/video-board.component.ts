import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { UserConnection } from '../signalr.service';


@Component({
  selector: 'app-video-board',
  templateUrl: './video-board.component.html',

})
export class VideoBoardComponent implements OnInit {
  @Input()
  user: UserConnection;

  joined = false;

  constructor() { }


  click() {
    //closevideo();
    window.location.reload();

  }


  ngOnInit() {}

}
