import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Robot} from "../../../model/Robots/Robot";

@Component({
  selector: 'app-robot-details-new',
  templateUrl: './robot-details-new.component.html',
  styleUrls: ['./robot-details-new.component.css']
})
export class RobotDetailsComponentNew implements OnInit {

  @Input()
  robot: Robot;

  @Output("refreshEvent")
  refreshEvent: EventEmitter<any> = new EventEmitter();

  callParent() {
    this.refreshEvent.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
