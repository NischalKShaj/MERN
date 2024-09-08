// <====================== file to implement quick sort======================>

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let leftSub = [];
  let rightSub = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftSub.push(arr[i]);
    } else {
      rightSub.push(arr[i]);
    }
  }
  return [...quickSort(leftSub), pivot, ...quickSort(rightSub)];
};

const arr = [3, 4, 5, 7, 3, 7, 9, 4, 1];
const result = quickSort(arr);
console.log(result);
