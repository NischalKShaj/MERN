// file to show case the objects weird character

// using []
const fruits = "apple";

let newObject = {
  [fruits]: 10,
  "per kg": 20, //multiWord key needs "" or it should be assigned to another variable like computed property
};

// below 2 console should return the same output
console.log("value 1 :", newObject.apple);
console.log("value 2 :", newObject[fruits]);

console.log(newObject["per kg"]); //don't forget to put "" and [] for multiWord key

// no limit in naming the key for the object
let obj = {
  for: "hello",
  while: "hey",
  return: "how are you",
};

// logging this would not give any error
// unlike the other reserved keywords
console.log("objs value", obj);
