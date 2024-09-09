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

// generates infinite series of numbers
function* infinite(num) {
  while (true) {
    yield num++;
  }
}

// for iterating over an array
function* iterate(arr) {
  for (let items of arr) {
    yield items;
  }
}

// function to find the sum of  10 num
function* sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
    yield count;
  }
}

const val = sum(10);
let res;
let final;
while (!(res = val.next()).done) {
  final = res.value;
}
console.log(final);
