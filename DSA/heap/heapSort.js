// <======================== file to show the heap sort ===============>

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  sort(arr) {
    this.heap = arr;
    let n = this.heap.length;

    this.buildHeap();
    for (let i = n - 1; i > 0; i--) {
      [this.heap[0], this.heap[i]] = [this.heap[i], this.heap[0]];
      this.heapify(i, 0);
    }
    return this.heap;
  }
  buildHeap() {
    let n = this.heap.length;
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
      this.heapify(n, i);
    }
  }
  heapify(n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < n && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
      this.heapify(n, largest);
    }
  }
}

const heapSort = new MaxHeap();
const arrayToSort = [12, 11, 13, 5, 6, 7];
const sortedArray = heapSort.sort(arrayToSort);
console.log("Sorted array:", sortedArray);
