// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

class Character {
  constructor(name, health, strength, xp) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.inventory = {
      gold: 10,
      keys: 1,
    };
  }
  describe() {
    console.log(
      `${this.name} has ${this.health} health points left, ${this.strength} attack dmg, ${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.keys} key(s)`
    );
  }
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        this.inventory.keys += target.inventory.keys;
        this.inventory.gold += target.inventory.gold;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} XP, ${target.inventory.keys} key(s) and ${target.inventory.gold} gold`
        );
        this.xp = bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.inventory.keys} key(s) and ${this.inventory.gold} gold`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);
const monster = new Character("Spike", 40, 20);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);
aurora.attack(glacius);
glacius.attack(aurora);
aurora.attack(glacius);
glacius.attack(aurora);
aurora.attack(glacius);
glacius.attack(aurora);
aurora.attack(glacius);
glacius.attack(aurora);
aurora.attack(glacius);

console.log(aurora.describe());
