// <==================================== file to implement bubble sort ===================>

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const arr = [3, 4, 5, 7, 3, 7, 9, 4, 1];
const result = bubbleSort(arr);
console.log(result);
