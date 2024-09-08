// <================ file to implement linear search=================>

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const value = 5;
const result = linearSearch(arr, value);
console.log(`index of the ${value} is ${result}`);
