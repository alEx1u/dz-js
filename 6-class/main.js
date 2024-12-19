class Car {
    #brand;
    #model;
    #mileage;
    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = Number(mileage);
    }
    get uznatProbeg() {
        return this.#mileage;
    }
    set skrutitProbeg(probeg) {
        if(Number(probeg) < 0 || Number.isNaN(Number(probeg))) {
            console.log('перегнул дядя')
            return false;
        }
        this.#mileage = probeg;
    }
    info() {
        console.log(`Это жеребец ${this.#model} от ${this.#brand} c пробегом всего лишь ${this.#mileage} километров!`);
    }
}
const Corvette = new Car('Шэвроле', 'Корвет', 155000);
console.log(Corvette);
Corvette.skrutitProbeg = 15;
Corvette.info();