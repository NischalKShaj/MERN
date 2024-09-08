// <=================== file to implement selection sort =======================>

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const arr = [3, 4, 5, 7, 3, 7, 9, 4, 1];
const result = selectionSort(arr);
console.log(result);
