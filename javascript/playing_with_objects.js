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

// using object methods
//   1. Object.assign
// <------------------>

let user = { name: "John" };
let company = { cname: "Google" };
let location = { country: "USA" };

Object.assign(user, company, location);
// now we can access the company and location within the user object
console.log("user", user);
// Note: cloning with Object.assign creates a shallow copy (pass by reference)

//  2. structuredObject
// <------------------>
// deep clone using structuredObject for nested objects (pass by value)
let department = {
  deptname: "Developer",
  workArea: {
    cabinNumber: "CF01",
    numberOfSeats: 60,
  },
};

let clone = structuredClone(department);
// Note: The two logs will show different values because `structuredClone` creates a deep copy of the object.
// This means the original `department` and the `clone` are completely separate objects in memory with different references.

console.log("department name", (department.deptname = "sr.developer")); // Changes the deptname in the original object
console.log("cloned department name", clone.deptname); // The clone retains the original deptname value

//  3. Object.create
// <---------------->

// Object.create allows you to create a new object that inherits properties from an existing object (prototype)
let school = {
  student: "Nischal",
  age: 22,
};
let college = Object.create(school);
console.log("college data", college); //logs {}, because college doesn't have it's own properties

console.log("student name: ", college.student); // logs "Nischal", which is inherited from the 'school' object

//  4. Object.keys
// <-------------->

// Object.keys will return an array of properties of the Object
let fruit = {
  name: "Banana",
  price: 20,
  country: "Indian",
};

// logs ["name", "price","country"]
console.log("properties of the object fruit: ", Object.keys(fruit));
// Note:- It will not contain the inherited properties names

//  5. Object.values
// <---------------->

// Object.values will return an array of values of the properties of the object
console.log("values of the object fruit: ", Object.values(fruit));

//  6.Object.entries
// <---------------->

// Object.entries will return the array of ["key","value"] pair in the object
console.log("entries of the object fruit", Object.entries(fruit));
// Note:- it will return the key and the value in the 2 valued array

//  7. Object.freeze
// <---------------->

//  Object.freeze will allow you to freeze the object properties, we cannot delete or change the properties
Object.freeze(fruit);
fruit.name = "mango";
console.log("fruit name: ", fruit.name); // will not change the fruit.name
// This will log "fruit name: mango" because the expression fruit.name = "mango" returns "mango"
console.log("fruit name: ", (fruit.name = "mango"));

//  8. Object.seal
// <-------------->

// Object.seal will not allow to add or delete the existing object but allows to
Object.seal(fruits);
newObject["per kg"] = 30;
console.log("amount per kg", newObject); // allows modification to existing properties but doesn't allow to add new properties

//  9. Object.getPrototypeOf
// <------------------------>

// Allow to get the internal prototype details of the object
