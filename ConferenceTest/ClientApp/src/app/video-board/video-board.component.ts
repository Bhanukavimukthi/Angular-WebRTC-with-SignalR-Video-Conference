import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { closevideo } from '../signalr.service';

@Component({
  selector: 'app-video-board',
  templateUrl: './video-board.component.html',
//  styleUrls: ['./video-board.component.scss']
})
export class VideoBoardComponent implements OnInit {

  constructor() { }

  click() {
    closevideo();
    window.location.reload();

  }

  //@Input()
  //localclient: LocalClient;

  //theVideo: HTMLVideoElement;
  //@ViewChild('theVideo', { static: true })
  //set mainLocalVideo(el: ElementRef) {
  //  this.theVideo = el.nativeElement;
  //}
  

  //constructor() {
  //  //localvideo.localVideofn(this.local);

  //  //this.localVideo: HTMLVideoElement = localvideo;
  //}

  //ngOnInit() {
  //  const constraints = { 'video': true, 'audio': true };
  //  const stream = navigator.mediaDevices.getUserMedia(constraints);

  //  this.localclient.localStream = stream;
  //  this.localclient.localVideo = document.getElementById('theVideo');
  //  this.localclient.localVideo.srcObject = stream;


  //}
  ngOnInit() {}

}
