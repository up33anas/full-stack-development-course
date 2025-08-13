// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Callbacks

function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

firstFunction(para, function () {
  // do stuff
  secondFunction(para, function () {
    thirdFunction(para, function () {});
  });
});

// Promises
// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! Resolved the promise!");
  } else {
    reject("No! Rejected the promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((error) => {
    console.error(error);
  });

const myNewPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved!");
  }, 3000);
});

myNewPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

Thenables;

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log("This is a user....., ", user);
    });
  });

console.log(users);

Async / Await;

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};

myCoolFunction();

const anotherFunction = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunction();

// Workflow function

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });
  console.log(userEmailArray);
  postToWebPage(userEmailArray);
};

getAllUserEmails();

const postToWebPage = (data) => {
  console.log(data);
};

// 2nd parameter of fetch()

const getDadJokes = async () => {
  const response = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
};

getDadJokes();

const jokeObject = {
  id: "3LmyXvsPfqc",
  joke: "I don't trust stairs. They're always up to something.",
};

const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse.headers);
};

postData(jokeObject);

// const requestJoke = async (firstname, lastname) => {
//   const response = await fetch(
//     `http://api.icndb.com/jokes/random?firstname=${firstname}&lastname=${lastname}&limitTo=[nerdy]`
//   );
//   const jsonResponse = await response.json();
//   console.log(jsonResponse.value.joke);
// };

requestJoke("Anas", "Sabir");

////////////////////////////////////////////
////////////////////////////////////////////
const getDataFromForm = () => {
  const requestObj = {
    firstname: "Anas",
    lastname: "Sabir",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icnb.com/jokes/random?firstname=${requestData.firstname}&lastname=${requestData.lastname}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Procedural workflow function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("Finished!");
};
