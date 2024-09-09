// <============ file to show the promise methods ======================>

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 ");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 3");
  }, 1000);
});

const promise = [promise1, promise2, promise3];

// Promise.all()
Promise.all(promise)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("promise.all"));

// Promise.race()
Promise.race(promise)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("promise.race()"));

// Promise.any()
Promise.any(promise)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("promise.any"));

// Promise.allSettled()
Promise.allSettled(promise)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("promise.allSettled"));
