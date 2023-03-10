import SimpleFighter from './SimpleFighter';
import Energy from '../Energy';

interface Fighter extends SimpleFighter{
  // lifePoints: number;
  // strength: number;
  defense: number;
  energy?: Energy;
  // attack(enemy: Fighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  // receiveDamage(attackPoints: number): number;
}

export default Fighter;
