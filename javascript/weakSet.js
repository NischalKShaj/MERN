// <============================= file to show the weak set =======================>

let weak = new WeakSet();

let obj1 = {};
let obj2 = {};

weak.add(obj1);
weak.add(obj2);

console.log(weak.has(obj1));

weak.delete(obj2);
console.log(weak.has(obj2));
