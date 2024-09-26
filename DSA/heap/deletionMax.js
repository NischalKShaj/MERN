// <========================== file to show the deletion in max Heap ===============>

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let current = this.heap.length - 1;
    while (true) {
      let parent = Math.floor((current - 1) / 2);
      if (this.heap[current] > this.heap[parent]) {
        this.swap(current, parent);
        current = parent;
      } else {
        break;
      }
    }
  }
  swap(current, parent) {
    let temp = this.heap[current];
    this.heap[current] = this.heap[parent];
    this.heap[parent] = temp;
  }
  // for deleting the max value
  deleteMax() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }
  // for preforming heapifyDown
  heapifyDown() {
    let current = 0;
    while (true) {
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      let largest = current;
      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] > this.heap[largest]
      ) {
        largest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] > this.heap[largest]
      ) {
        largest = rightChild;
      }
      if (largest !== current) {
        this.swap(largest, current);
        current = largest;
      } else {
        break;
      }
    }
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(67);
maxHeap.insert(60);
maxHeap.insert(8);
maxHeap.insert(3);
console.log(maxHeap.heap);
console.log(maxHeap.deleteMax());
console.log(maxHeap.heap);
