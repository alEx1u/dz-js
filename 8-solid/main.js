class Billing {
  constructor(amount) {
    this.amount = amount;
  }
  calculateTotal() {
    return this.amount;
  }
}
class fixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }
}

class hourBilling extends Billing {
  constructor(amount, hour = 0) {
    super(amount);
    this.hour = hour;
  }
  calculateTotal() {
    return this.amount * this.hour;
  }
}

class itemBilling extends Billing {
  constructor(amount, elementsAmount = 0) {
    super(amount);
    this.elementsAmount = elementsAmount;
  }
  calculateTotal() {
    return this.amount * this.elementsAmount;
  }
}

console.log(new Billing(3).calculateTotal())
console.log(new fixBilling(3).calculateTotal())
console.log(new hourBilling(10, 3).calculateTotal())
console.log(new itemBilling(5, 14).calculateTotal())