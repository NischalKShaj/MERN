// <=========================== file to show the polymorphism =================>

class Animal {
  speak() {
    console.log("animals speak");
  }
}

class Dog extends Animal {
  speak() {
    console.log("dog barks...");
  }
}

class Cat extends Animal {
  speak() {
    console.log("cat mews");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach((animal) => animal.speak());
