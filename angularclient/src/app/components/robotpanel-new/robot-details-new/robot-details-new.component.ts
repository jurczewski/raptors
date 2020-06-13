import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { timer } from 'rxjs';
import {Robot} from "../../../model/Robots/Robot";
import { Orientation } from 'src/app/model/Stand/Orientation';
import {SpecialProperty} from "../../../model/GenericRobotModel/SpecialProperty/SpecialProperty";
import {SpecialPropertyEnum} from "../../../model/GenericRobotModel/SpecialProperty/SpecialPropertyEnum";

@Component({
  selector: 'app-robot-details-new',
  templateUrl: './robot-details-new.component.html',
  styleUrls: ['./robot-details-new.component.css']
})
export class RobotDetailsComponentNew implements OnInit, OnChanges {

  @Input()
  properties: Array<SpecialProperty>;

  @Output("refreshEvent")
  refreshEvent: EventEmitter<any> = new EventEmitter();

  typeEnum = SpecialPropertyEnum;

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

  private refreshRepeater() {
    timer(60000, 60000).subscribe(x => {
      this.refreshEvent.emit();
    })
  }

  ngOnInit() {
    this.refreshRepeater();
  }

  ngOnChanges(){
    this.updateBatteryIcon();
  }

}
