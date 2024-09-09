// <====================== file to show the call apply bind ==================>

const person1 = {
  name: "Nischal",
  greet: function (message) {
    console.log(`${message}, ${this.name}`);
  },
};

const person2 = {
  name: "Vishnu",
};

person1.greet.call(person1, "HI");

person1.greet.apply(person2, ["Hlo"]);

const greetings = person1.greet.bind(person2);
greetings("Hey");
