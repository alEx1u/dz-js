class Billing {
  #amount = 100;
  calculateTotal() {
    return this.#amount;
  }
}
class fixBilling extends Billing {
  #amount;
  constructor(amount) {
    super();
    this.#amount = amount;
  }
}

class hourBilling extends Billing {
  #amount;
  #hour;
  constructor(amount, hour = 0) {
    super();
    this.#amount = amount;
    this.#hour = hour;
  }
  calculateTotal() {
    return this.#amount * this.#hour;
  }
}

class itemBilling extends Billing {
  #amount;
  #elementsAmount;
  constructor(amount, elementsAmount = 0) {
    super();
    this.#amount = amount;
    this.#elementsAmount = elementsAmount;
  }
  calculateTotal() {
    return this.#amount * this.#elementsAmount;
  }
}

console.log(new Billing().calculateTotal());
console.log(new fixBilling(3).calculateTotal());
console.log(new hourBilling(10, 3).calculateTotal());
console.log(new itemBilling(5, 14).calculateTotal());
