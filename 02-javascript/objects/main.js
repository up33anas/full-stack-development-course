const myObject = { name: "Anas" };

const anotherObject = {
  alive: true,
  answer: 42,
  hobbies: ["coding", "reading", "running"],
  beverage: {
    name: "tea",
    type: "hot",
    isSweet: true,
  },
  action: function () {
    return `Time for a ${this.beverage.type} ${this.beverage.name}`;
  },
};
console.log(myObject);

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroom Vroom!";
  },
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck.wheels); // 4
console.log(truck.doors); // 2

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whoosh Whoosh";
};
console.log(car.wheels);
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function () {
  return "Sush!";
};
console.log(tesla.engine());
