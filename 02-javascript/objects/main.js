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
console.log(anotherObject.answer);

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

// Key Value pairs
const band = {
  vocals: "Robert Plant",
  guiter: "Jimmy Page",
  bass: "Anyone",
  drums: "Doe",
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
  console.log(`On ${job}, it's ${band[job]}`);
}

// Destructuring objects
const { guiter: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

const { guiter, vocals, bass, drums } = band;
console.log(guiter);
console.log(vocals);

function sings({ vocals }) {
  return `${vocals} sings`;
}

console.log(sings(band));
