// <======================== file to show the constructor function ==============>

function Greetings(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`hello, ${name}`);
  };
}

const greet = new Greetings("Nischal", 22);
greet.greet();
