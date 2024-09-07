// function to demonstrate the generator function

// to find the even numbers with the function
function* even(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      yield i;
    }
  }
}

const result = even(10);

for (let num of result) {
  console.log(num);
}
