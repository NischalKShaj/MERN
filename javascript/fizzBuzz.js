// <======================function that prints the numbers from 1 to 100.
// For multiples of three, print "Fizz" instead of the number and for the
// multiples of five, print "Buzz". For numbers which are multiples of
// both three and five, print "FizzBuzz". ==========>

const fizzBuzz = () => {
  let index = 1;
  while (index <= 20) {
    if (index % 3 == 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else if (index % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(index);
    }
    index++;
  }
};

fizzBuzz();
