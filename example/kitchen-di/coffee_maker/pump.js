import {Inject} from '../../../src/annotations';
import {Heater} from './heater';
import {Electricity} from '../electricity';

@Inject(Heater, Electricity)
export class Pump {
  constructor(heater, electricity) {
    this.heater = heater;
    this.electricity = electricity;
  }

  pump() {
    console.log('Pumping the watter...');
  }
}
