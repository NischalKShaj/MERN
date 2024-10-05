// <======================= file to implement the reduce ====================>

// reduce for finding the largest
const arr = [4, 52, 6, 2, 5, 7, 8];
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const largest = arr.reduce((acc, value) => {
  return acc > value ? acc : value;
});

console.log(largest);

// reduce for finding secondLargest
const secondLargest = arr.reduce(
  (acc, value) => {
    const [large, secondLargest] = acc;

    if (value > large) {
      return [value, large];
    } else if (value > secondLargest && value !== large) {
      return [large, value];
    }
    return acc;
  },
  [-Infinity, -Infinity]
);
console.log(secondLargest[1]);

// reduce for finding the smallest value in an array
const smallest = arr.reduce((acc, value) => {
  return acc < value ? acc : value;
});

console.log(smallest);

// reduce for finding the second smallest value in the array
const secondSmallest = arr.reduce(
  (acc, value) => {
    let [smallest, secondSmallest] = acc;
    if (smallest > value) {
      return [value, smallest];
    } else if (secondSmallest > value && smallest !== value) {
      return [smallest, value];
    }
    return acc;
  },
  [Infinity, Infinity]
);

console.log(secondSmallest[1]);

// reduce for finding the sum
const sum = arr.reduce((acc, val) => {
  return (acc += val);
}, 0);

console.log(sum);

// using reduce to flat an array
const multi = matrix.reduce((acc, val) => {
  return acc.concat(val);
}, []);

console.log(multi);

// for finding the occurrence of each value
const occurrence = fruits.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(occurrence);
