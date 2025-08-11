// JavaScript Event Listeners

// Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//   alert("Doing Something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click", (e) => {
//   console.log(e.target); // clicked element appears in console
//   e.target.textContent = "Clicked";
// });

document.addEventListener("readystatechange", (evt) => {
  if (evt.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (evt) => {
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    false
  );

  div.addEventListener("click", (evt) => {
    div.classList.toggle("blue");
    div.classList.toggle("black");
  });

  h2.addEventListener("click", (evt) => {
    const myText = evt.target.textContent;
    myText === "My 2nd View"
      ? (evt.target.textContent = "Clicked")
      : (evt.target.textContent = "My 2nd View");
  });

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (evt) => {
    evt.target.classList.add("height100");
  });

  nav.addEventListener("mouseout", (evt) => {
    evt.target.classList.remove("height100");
  });

  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log("submit event");
  });
};
