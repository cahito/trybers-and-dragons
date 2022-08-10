import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private player1: Fighter,
    private player2: Fighter[] | SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > -1
      && this.player2.some((rival) => rival.lifePoints > -1)) {
      this.player2.forEach((rival) => {
        rival.attack(this.player1);
        this.player1.attack(rival);
      });
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
