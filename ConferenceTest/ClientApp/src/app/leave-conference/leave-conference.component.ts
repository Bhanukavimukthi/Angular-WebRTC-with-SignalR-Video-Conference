import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leave-conference',
  templateUrl: './leave-conference.component.html',
  styleUrls: ['./leave-conference.component.css']
})
export class LeaveConferenceComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
