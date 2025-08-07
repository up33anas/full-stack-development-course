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
console.log(anotherObject.action());
