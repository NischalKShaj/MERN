// file to show case the weird characteristics of objects

// using []
const fruits = "apple";

let newObject = {
  [fruits]: 10, // Computed property: creates a key named 'apple' with value 10
  "per kg": 20, // Multi-word key requires quotes
};

// below 2 console should return the same output
console.log("value 1 :", newObject.apple); // Accessing using dot notation
console.log("value 2 :", newObject[fruits]); // Accessing using computed property (same as newObject["apple"])

console.log(newObject["per kg"]); //don't forget to put "" and [] for multiWord key

// no limit in naming the key for the object
let obj = {
  for: "hello",
  while: "hey",
  return: "how are you",
};

// logging this would not give any error
// unlike the other reserved keywords until its _proto_
console.log("objs value", obj);

// use of in operator
console.log("for" in obj); // should return true

// Note: if the key is not present then no error will be produced so it will return false

// using the for...in loop and the order of logging
// Note:for non int property it will be log in the order of creation
// For int property it will be log in the sorted order

let numObj = {
  1: "hello",
  0: "hey",
  4: "how are you",
};

for (let key in numObj) {
  console.log("keys", key); // logs in order 0,1,4 due to integer sorting
}

// Note:copying the object we get only its reference not the actual value

let obj2 = {
  a: 5,
};

let b = obj2;
console.log("result", b === obj2); // should return true, because of same reference

let obj3 = {
  a: 5,
};
console.log("result obj3", obj3 === obj2); // should return false, even though they have same value but different reference
