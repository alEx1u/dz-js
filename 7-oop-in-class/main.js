class Character {
  #race;
  #name;
  constructor(race, name, language) {
    this.#race = race;
    this.#name = name;
    this.language = language;
  }
  speak() {
    console.log(
      `My name is ${this.#name} and I am ${this.#race}. I speak ${
        this.language
      }`
    );
  }
  addLanguage(language) {
    this.language = this.language + " and " + language;
  }
}

class Orc extends Character {
  constructor(weapon, name = "just an Orc", language = "Orcish") {
    super("Orc", name, language);
    this.weapon = weapon;
  }
  showWeapon() {
    if (confirm(`Look at my ${this.weapon}. It is wonderful, isn't it?`)) {
      console.log(`Heheheh`);
    } else {
      console.log(`OK. I wil kill u with my ${this.weapon} then`);
    }
  }
  smash() {
    console.log(`I smash with my ${this.weapon}!!!`);
  }
}

class Elf extends Character {
  constructor(spell, name = "just an Elf", language = "Elfish") {
    super("Elf", name, language);
    this.spell = spell;
  }
  makeSpell() {
    console.log(`I am making my ${this.spell} spell!!!`);
  }
  storyAboutTheSpell() {
    if (confirm(`Would u like to hear a story about my ${this.spell} spell`)) {
      console.log("I stole it from the Harry Potter book");
    } else {
      console.log(`OK. It's not a problem)`);
    }
  }
}

const misha = new Elf("expelarmus");
const serega = new Orc("hand", "Serega");

serega.speak();
misha.makeSpell();
misha.speak();
misha.addLanguage("Orcish");
misha.speak();
serega.showWeapon();
misha.storyAboutTheSpell();
