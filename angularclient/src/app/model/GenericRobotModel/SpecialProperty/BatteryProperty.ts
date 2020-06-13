import {SpecialProperty} from './SpecialProperty';
import {Property} from "../Property";
import {SpecialPropertyEnum} from "./SpecialPropertyEnum";

export class BatteryProperty extends SpecialProperty {

  constructor(prop: Property) {
    super(prop);
    this.specialType = SpecialPropertyEnum.BATTERY_LEVEL;
  }

  toString(): string {
    return super.toString() + "%";
  }

  getName(): string {
    return "Bateria";
  }
}
