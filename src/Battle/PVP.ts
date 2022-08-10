import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private player1: Fighter,
    private player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player1.attack(this.player2);
      // console.log('player2 STR: ', this.player2.strength);
      // console.log('player2 DEF: ', this.player2.defense);
      // console.log('player2 HP: ', this.player2.lifePoints);
      this.player2.attack(this.player1);
      // console.log('player1 STR: ', this.player1.strength);
      // console.log('player1 DEF: ', this.player1.defense);
      // console.log('player1 HP: ', this.player1.lifePoints);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
