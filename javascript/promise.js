// <==================== file to show the promise ====================>

// simple implementation of promise
const promise = new Promise((resolve, reject) => {
  let data = "hello";
  if (data) {
    resolve(data);
  } else {
    reject("not found");
  }
})
  .then((data) => {
    console.log(`${data}`);
  })
  .catch((error) => console.log(error));

// promise chaining
const chaining = new Promise((resolve, _reject) => {
  resolve("data processing");
});

chaining
  .then((data) => {
    console.log(data);
    return "loading";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.log(error));

// using promise with async/await
const check = () => {
  return new Promise((resolve, _reject) => {
    resolve("data resolved");
  });
};

const testing = async () => {
  try {
    let data = await check();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

testing();

// converting a promise to async/await
const asyncFunc = async () => {
  try {
    const promise = await new Promise((resolve, reject) => {
      resolve("data resolved!!!");
    });
    console.log(promise);
  } catch (error) {
    console.error(error);
  }
};

asyncFunc();
