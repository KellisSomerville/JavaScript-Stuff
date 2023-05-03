// -------- Constructors & Classes

class Pokemon {
  constructor(name) {
    this.name = name;
    this.isSleepy = true;
    this.isHungry = false;
  }

  sayName() {
    console.log(`${this.name}`);
  }

  itEats() {
    if (this.isHungry) {
      this.isHungry = false;
      this.isSleepy = true;
      console.log(
        `${this.name} finished eating. This ${this.name} is sleepy now.`
      );
    } else {
      console.log(`${this.name} isn't hungry. ${this.name} is sleepy though.`);
    }
  }

  itSleeps() {
    if (this.isSleepy) {
      this.isSleepy = false;
      this.isHungry = true;
      console.log(`${this.name} went to sleep.`);
      console.log(`${this.name} woke up and is now hungry!`);
    } else {
      console.log(`${this.name} isn't sleepy but ${this.name} is mad hungry!`);
    }
  }
};

const pikachu = new Pokemon("Pikachu");

Pokemon.prototype.newPower = function (){
    return "Unlocked a new power!"
};

pikachu.sayName();
pikachu.itEats();
pikachu.itSleeps();
console.log(pikachu.newPower);
