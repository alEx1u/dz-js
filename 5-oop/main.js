const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}
Character.prototype.speak = function() {
    console.log(`My name is ${this.name} and I am ${this.race}. I speak ${this.language}`);
}
Character.prototype.addLanguage = function(language) {
    this.language = this.language + ' and ' + language;
}

const Orc = function(weapon, name = 'just an Orc') {
    this.weapon = weapon;
    this.race = ' an Orc';
    this.language = `Orcish`;
    this.name = name;
}
Orc.prototype.showWeapon = function() {
    if(confirm(`Look at my ${this.weapon}. It is wonderful, isn't it?`)) {
        console.log(`Heheheh`);
    } else {
        console.log(`OK. I wil kill u with my ${this.weapon} then`)
    }    
}
Orc.prototype.punch = function() {
    console.log(`I smash with my ${this.weapon}!!!`);
}
Object.setPrototypeOf(Orc.prototype, Character.prototype)
const serega = new Orc('hand', 'Serega');
serega.speak()


const Elf = function(spell, name = 'just an Elf') {
    this.spell = spell;
    this.race = 'an Elf';
    this.language = 'Elfish';
    this.name = name;
}
Elf.prototype.makeSpell = function() {
    console.log(`I am making my ${this.spell} spell!!!`);
}
Elf.prototype.storyAboutTheSpell = function() {
    if(confirm(`Would u like to hear a story about my ${this.spell} spell`)) {
        console.log('I stole it from the Harry Potter book');
    } else {
        console.log(`OK. It's not a problem)`)
    }
}
Object.setPrototypeOf(Elf.prototype, Character.prototype);
const misha = new Elf('expelarmus');
misha.makeSpell();
misha.speak()
misha.addLanguage('Orcish');
misha.speak()
serega.showWeapon();
misha.storyAboutTheSpell();