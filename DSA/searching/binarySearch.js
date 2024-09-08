// <=================== file for finding showing the binary search ===================>

// recursive
const binarySearch = (arr, value, start, end) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      return binarySearch(arr, value, start, mid - 1);
    } else if (arr[mid] < value) {
      return binarySearch(arr, value, mid + 1, end);
    }
  }
  return -1;
};

// iterative
const iterBinarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      end = mid - 1;
    } else if (arr[mid] < value) {
      start = mid + 1;
    }
  }
  return -1;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const value1 = 3;
const result1 = iterBinarySearch(arr1, value1);
console.log(`index of the ${value1} is ${result1}`);

const arr = [1, 2, 3, 4, 5, 6, 7];
const value = 5;
const start = 0;
const end = arr.length - 1;
const result = binarySearch(arr, value, start, end);
console.log(`index of the ${value} is ${result}`);
