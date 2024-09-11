// <====================== file to remove the adjacent odd numbers in an array ===============>

const removeAdjacent = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      let index = i;
      while (index < arr.length && arr[index] % 2 !== 0) {
        index++;
      }
      arr.splice(i, index - i);
    }
  }
  return arr;
};

const arr = [1, 2, 3, 2, 33, 5, 3, 56, 4, 7, 8, 6, 5, 4, 3];
const result = removeAdjacent(arr);
console.log(result);
