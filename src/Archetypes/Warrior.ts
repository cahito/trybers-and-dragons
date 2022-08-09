import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  protected _name: string;
  protected _special: number;
  protected _cost: number;
  private _energy: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._name = name;
    this._special = 0;
    this._cost = 0;
    this._energy = 'stamina';
    Warrior._createdArchetypeInstances += 1;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;
