// <================= file to show functional composition =================>

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleSquare = (x) => square(double(x));

console.log(doubleSquare(3));

// <================= currying ================>

const mul = (a) => (b) => a * b;

const result = mul(3);
console.log(result(2));
