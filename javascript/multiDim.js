// <========================= file to show the working of multi dimensional array and objects =============>

// to find sum of the values in same index
const sum = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!newArr[j]) {
        newArr[j] = 0;
      }
      newArr[j] += arr[i][j];
    }
  }
  return newArr;
};

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = sum(arr);
console.log(res);

// to find the sum of the values
const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
};

const res1 = sumArr(arr);
console.log(res1);

// to find the transpose of a matrix
const transpose = (arr) => {
  let transpose = [];
  for (let i = 0; i < arr.length; i++) {
    transpose[i] = [];
    for (let j = 0; j < arr[i].length; j++) {
      transpose[i][j] = arr[j][i];
    }
  }
  return transpose;
};

const res2 = transpose(arr);
console.log(res2);

// to flatten an array
const flat = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
};

const res3 = flat(arr);
console.log(res3);

// largest value in the array
const largest = (arr) => {
  let maximum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let cur = arr[i][j];
      if (cur > maximum) {
        maximum = cur;
      }
    }
  }
  return maximum;
};

const res4 = largest(arr);
console.log(res4);

// for checking whether the array is symmetric
let sym = [
  [1, 2, 3],
  [2, 5, 6],
  [3, 6, 9],
];

const symmetric = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] != arr[j][i]) {
        return false;
      }
    }
  }
  return true;
};

const res5 = symmetric(sym);
console.log(res5);

// for rotating the array by 90deg
const rotate = (arr) => {
  let transpose = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    transpose[i] = [];
    for (let j = arr[i].length - 1; j >= 0; j--) {
      transpose[i][j] = arr[j][i];
    }
  }
  for (let i = 0; i < transpose.length; i++) {
    transpose[i].reverse();
  }
  return transpose;
};

const res6 = rotate(arr);
console.log(res6);

// for finding the max sum from row
const maxSum = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
    }
    if (rowSum > max) {
      max = rowSum;
    }
  }
  return max;
};

const res7 = maxSum(arr);
console.log(res7);

// for checking if the rowSum = colSum = diagonalSum
const magicMatrix = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

const totalSum = (arr) => {
  let rowSum = [];
  let colSum = new Array(arr.length).fill(0);
  let diagonalSum1 = 0;
  let diagonalSum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let rows = 0;
    for (let j = 0; j < arr[i].length; j++) {
      rows += arr[i][j];
      colSum[j] += arr[i][j];

      if (i === j) {
        diagonalSum1 += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        diagonalSum2 += arr[i][j];
      }
    }
    rowSum.push(rows);
  }
  let finalSum = [...rowSum, ...colSum, diagonalSum1, diagonalSum2];
  let firstSum = finalSum[0];

  return finalSum.every((val) => val == firstSum);
};

const res8 = totalSum(magicMatrix);
console.log(res8);

// calculating the sum of values in nested arrays
const multiObj = [
  { ab: [8, 46, 13] },
  { ab: [8, 46, 13] },
  { ab: [8, 46, 13] },
];

const calc = (arr) => {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let nested = arr[i].ab;
    for (let j = 0; j < nested.length; j++) {
      totalSum += nested[j];
    }
  }
  return totalSum;
};

const res9 = calc(multiObj);
console.log(res9);

// Find the maximum value from all arrays inside the 'ab' property.
const multiObj1 = [
  { ab: [8, 46, 13] },
  { ab: [15, 33, 72] },
  { ab: [21, 64, 18] },
];

const maxVal = (arr) => {
  let max = -Infinity;
  let nested = [];
  for (let i = 0; i < arr.length; i++) {
    nested = arr[i].ab;
    for (let j = 0; j < nested.length; j++) {
      if (nested[j] > max) {
        max = nested[j];
      }
    }
  }
  return max;
};

const res10 = maxVal(multiObj1);
console.log(res10);

// flatten nested array of objs
const flatObj = (arr) => {
  let newArr = [];
  let nested = [];
  for (let i = 0; i < arr.length; i++) {
    nested = arr[i].ab;
    newArr.push(...nested);
  }
  return newArr;
};

const res11 = flatObj(multiObj);
console.log(res11);

//  Sum of Each Nested Array
const sumNested = (arr) => {
  let nested = [];
  let rows = [];
  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    nested = arr[i].ab;
    for (let j = 0; j < nested.length; j++) {
      rowSum += nested[j];
    }
    rows.push(rowSum);
  }
  return rows;
};

const res12 = sumNested(multiObj1);
console.log(res12);

// Calculate the Average of Nested Array Values
const calcAv = (arr) => {
  let nested = [];
  let averageArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    nested = arr[i].ab;
    for (let j = 0; j < nested.length; j++) {
      sum += nested[j];
    }
    averageArr.push(sum);
  }
  let av = 0;
  for (let i = 0; i < averageArr.length; i++) {
    av += averageArr[i];
  }
  return Math.floor(av / averageArr.length);
};

const res13 = calcAv(multiObj1);
console.log(res13);

//  Count Occurrences of Each Value
const multiObj2 = [
  { ab: [8, 46, 13] },
  { ab: [15, 33, 8] },
  { ab: [21, 46, 13] },
];

const count = (arr) => {
  let occurrences = {};
  let nested = [];
  for (let i = 0; i < arr.length; i++) {
    nested = arr[i].ab;
    for (let j = 0; j < nested.length; j++) {
      let val = nested[j];
      occurrences[val] = (occurrences[val] || 0) + 1;
    }
  }
  return occurrences;
};

const res14 = count(multiObj2);
console.log(res14);

// Sort Nested Arrays Based on Sum
const sortSum = (arr) => {
  let row = [];
  let nested = [];
  for (let i = 0; i < arr.length; i++) {
    nested = arr[i].ab;
    let rowSum = 0;
    for (let j = 0; j < nested.length; j++) {
      rowSum += nested[j];
    }
    row.push(rowSum);
  }
  return row.sort((a, b) => a - b);
};

const res15 = sortSum(multiObj1);
console.log(res15);

//  Sum Only Even Values in Nested Arrays
const evenSum = (arr) => {
  let nested = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    nested = arr[i].ab;
    for (let j = 0; j < nested.length; j++) {
      if (nested[j] % 2 === 0) {
        sum += nested[j];
        console.log(nested[j], sum);
      }
    }
  }
  return sum;
};

const res16 = evenSum(multiObj1);
console.log(res16);

// Filter Objects Based on Maximum Value
const filterMax = (arr, threshold = 50) => {
  return (filteredData = arr.filter((obj) => Math.max(...obj.ab) > threshold));
};

const res17 = filterMax(multiObj1);
console.log(res17);

//  Multiply All Values by a Given Number
const multiply = (arr, multiplier = 2) => {
  return arr.map((obj) => {
    return { ab: obj.ab.map((val) => val * multiplier) };
  });
};

const res18 = multiply(multiObj);
console.log(res18);
