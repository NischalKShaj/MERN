// <================ file to show merge sort=====================>

const merge = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftSub = arr.slice(0, mid);
  let rightSub = arr.slice(mid);

  return mergeSort(merge(leftSub), merge(rightSub));
};

const mergeSort = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const arr = [3, 4, 5, 7, 3, 7, 9, 4, 1];
const result = merge(arr);
console.log(result);
