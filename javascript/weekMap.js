// <============================ file to show the week map ===============>

let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "value1");
weakMap.set(obj2, "value2");

console.log(weakMap.get(obj2));

console.log(weakMap.has(obj1));
console.log(weakMap.has(obj2));

weakMap.delete(obj1);
console.log(weakMap.has(obj1));
