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

  refresh() {
    this.refreshEvent.emit();
    this.updateBatteryIcon();
  }

  private updateBatteryIcon() {
    document.getElementById("batteryLevel").style.height = `${this.robot.batteryLevel}%`;

    if (this.robot.batteryLevel < 15) {
      document.getElementById("batteryLevel").className = 'battery-level error';
    } else if (this.robot.batteryLevel < 30) {
      document.getElementById("batteryLevel").className = 'battery-level warn';
    } else {
      document.getElementById("batteryLevel").className = 'battery-level';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
