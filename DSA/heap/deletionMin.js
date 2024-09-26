// <========================== file to show the deletion in min heap ===========>

class MinHeap {
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
      if (this.heap[current] < this.heap[parent]) {
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
  deleteMin() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let current = 0;
    while (true) {
      let leftChild = 2 * current + 1;
      let rightChild = 2 * current + 2;
      let smallest = current;
      if (
        leftChild < this.heap.length &&
        this.heap[leftChild] < this.heap[smallest]
      ) {
        smallest = leftChild;
      }
      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }
      if (smallest !== current) {
        this.swap(smallest, current);
        current = smallest;
      } else {
        break;
      }
    }
  }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(67);
minHeap.insert(60);
minHeap.insert(8);
minHeap.insert(3);
console.log(minHeap.heap);
console.log(minHeap.deleteMin());
console.log(minHeap.heap);
