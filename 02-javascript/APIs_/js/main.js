// Web Storage API
// window.alert(window.location);

const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "anas",
  hobbies: ["eat", "sleep", "code"],
  logname: function () {
    console.log(this.name);
  },
};

myObject.logname();

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("mySessionStore"));
console.log(key);
