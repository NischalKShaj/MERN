// <================ file to check the common values in the given array ============>

const commonValues = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }
  let set = new Set(res);
  res = new Array(...set);
  return res.sort((a, b) => a - b);
};

const arr1 = [1, 2, 0, 1, 3, 5, 6, 7, 8, 1, 2, 6, 7];
const arr2 = [1, 2, 1, 6, 5, 6, 7, 9, 3];
const result = commonValues(arr1, arr2);
console.log(result);
