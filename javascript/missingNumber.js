// <===================== file to find the missing number =======>

const missingNumber = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      newArr.push(arr[i] + 1);
    }
  }
  return newArr;
};

const arr = [1, 3, 4, 5, 7, 8, 9];
const result = missingNumber(arr);
console.log(result);
