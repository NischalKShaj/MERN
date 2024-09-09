//<================ file to show the prototypes =================>

const vehicle = {
  type: "bike",
  wheels: 2,
  milage: "35km",
};

function Bike(name, color) {
  this.name = name;
  this.color = color;
}

Bike.prototype = vehicle;

const bike = new Bike("Enfield", "Dessert");
const bikePrototype = Object.getPrototypeOf(bike);
console.log(bikePrototype);
console.log(bike);

// for (let key in bike) {
//   if (bike.hasOwnProperty(key)) {
//     console.log(`${key}:${bike[key]}(own property)`);
//   } else {
//     console.log(`${key}:${bike[key]} (inherited property)`);
//   }
// }

const newFeature = {
  type: "cruiser",
  milage: "40km",
  wheels: 2,
};

Object.setPrototypeOf(bike, newFeature);
for (let key in bike) {
  if (bike.hasOwnProperty(key)) {
    console.log(`${key}:${bike[key]}(own property)`);
  } else {
    console.log(`${key}:${bike[key]} (inherited property)`);
  }
}
