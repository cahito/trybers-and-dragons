import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;

/* {
  while (player1.lifePoints > -1 && player2.lifePoints > -1) {
    player1.attack(player2);
    player2.attack(player1);
  }} */