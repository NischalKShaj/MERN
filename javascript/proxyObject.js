// <================ file to demonstrate proxy objects =================>

const handler = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Setting the ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const target = {
  name: "Nischal",
  age: 21,
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);
proxy.age = 22;
