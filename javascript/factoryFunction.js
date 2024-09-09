// <================== file to show the factory function ===============>

const Greetings = (name, age) => {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`hello, ${this.name}`);
    },
  };
};

let greet = Greetings("Nischal", 22);
greet.greet();
