// reduce to return the array with values greater than 3

let arr = [1, 2, 3, 4, 5];

let newArr = arr.reduce((acc, val) => {
  if (val > 3) {
    acc.push(val);
  }
  return acc;
}, []);
console.log(newArr);
