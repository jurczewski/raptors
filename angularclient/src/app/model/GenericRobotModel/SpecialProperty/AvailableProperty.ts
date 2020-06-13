import {SpecialProperty} from './SpecialProperty';
import {Property} from "../Property";
import {SpecialPropertyEnum} from "./SpecialPropertyEnum";

export class AvailableProperty extends SpecialProperty {

  constructor(prop: Property) {
    super(prop);
    this.specialType = SpecialPropertyEnum.AVAILABLE;
  }

  toString(): string {
    return this.getValue() === "true" ? "online" : "offline";
  }

  getName(): string {
    return "Status";
  }
}
