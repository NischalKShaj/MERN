// <====================== file to show decimal conversion =================>

const decimalConversion = (num) => {
  let binary = "";

  if (num === 0) return "0";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary;
};

let num = 4;
let result = decimalConversion(num);
console.log(result);
