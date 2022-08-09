import Race from './Race';

class Orc extends Race {
  protected _name: string;
  protected _dexterity: number;
  static _createdRacesInstances = 0;

  constructor(
    name: string,
    dexterity: number,
    public _maxLifePoints: number = 74,
  ) {
    super(name, dexterity);
    this._name = name;
    this._dexterity = dexterity;
    Orc._createdRacesInstances += 1;
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

export default Orc;
