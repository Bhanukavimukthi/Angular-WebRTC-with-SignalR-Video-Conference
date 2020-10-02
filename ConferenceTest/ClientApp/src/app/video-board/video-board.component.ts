import { Component, OnInit} from '@angular/core';
import * as service from '../signalr.service';


@Component({
  selector: 'app-video-board',
  templateUrl: './video-board.component.html',
  styleUrls: ['./video-board.component.css']


})
export class VideoBoardComponent implements OnInit {
  joined = false;
  video = document.getElementById("localVideo");


  constructor() { }


  Cam() {
    //let stop = k => this.video.srcObject.getTracks().forEach(t => t.kind == k && t.stop());
    service.cameraOff(false);
  }

  CamOn() {
    service.cameraOn(true);
  }

  Mic() {

  }

  Quit() {
    window.location.reload();
  }

  ngOnInit() {}

}
