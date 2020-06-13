import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {timer} from 'rxjs';
import {Robot} from "../../../model/Robots/Robot";
import { Orientation } from 'src/app/model/Stand/Orientation';
import {SpecialProperty} from "../../../model/GenericRobotModel/SpecialProperty/SpecialProperty";
import {SpecialPropertyEnum} from "../../../model/GenericRobotModel/SpecialProperty/SpecialPropertyEnum";

@Component({
  selector: 'app-robot-details-new',
  templateUrl: './robot-details-new.component.html',
  styleUrls: ['./robot-details-new.component.css']
})
export class RobotDetailsComponentNew implements OnInit {

  @Input()
  properties: Array<SpecialProperty>;

  @Output("refreshEvent")
  refreshEvent: EventEmitter<any> = new EventEmitter();

  typeEnum = SpecialPropertyEnum;

  refresh() {
    this.refreshEvent.emit();
  }

  private refreshRepeater() {
    timer(60000, 60000).subscribe(x => {
      this.refreshEvent.emit();
    })
  }

  ngOnInit() {
    this.refreshRepeater();
  }

}
