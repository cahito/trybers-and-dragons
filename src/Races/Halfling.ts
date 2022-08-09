import Race from './Race';

class Halfling extends Race {
  protected _name: string;
  protected _dexterity: number;
  static _createdRacesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    public _maxLifePoints: number = 60,
  ) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    Halfling._createdRacesInstances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
