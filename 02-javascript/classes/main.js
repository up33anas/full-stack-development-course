// Javascript Classes
class Pizza {
  #size;
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.#size = "medium";
    this.crust = "original";
    this.toppings = [];
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  bake() {
    console.log(
      `Baking a ${this.#size} ${this.crust} ${this.type} crust pizza.`
    );
  }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());

// Inheritance
class Vehicle {
  constructor(noOfTyres) {
    this.tyres = noOfTyres;
    this.type = "electronic";
  }
  getTyres() {
    return this.tyres;
  }
  setTyres(vehicleTyres) {
    this.tyres = vehicleTyres;
  }
  getType() {
    return this.type;
  }
  setType(vehicleType) {
    this.type = vehicleType;
  }
}

class Car extends Vehicle {
  constructor(noOfTyres) {
    super(noOfTyres);
    this.type = "The Works";
  }
  tyre() {
    console.log(`This car has ${this.tyres} tyres.`);
  }
}

const car1 = new Car(3);
car1.tyre();
