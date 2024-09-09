// <=========================== file to implement the factorial of a number============>

const factorial = (number) => {
  if (number <= 1) return number;

  return number * factorial(number - 1);
};

const num = 2;
let result = factorial(num);
console.log(result);
