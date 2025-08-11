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

  div.addEventListener("click", (evt) => {
    evt.target.getElementsByClassName.backgroundColor = "purple";
  });

  view.addEventListener(
    "click",
    (evt) => {
      view.classList.add("purple");
    },
    false
  );

  h2.addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.target.textContent = "Clicked";
  });
};
