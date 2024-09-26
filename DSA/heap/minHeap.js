// <============================== file to create a min heap ================>

class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  // perform heapify up or the bubble up
  heapifyUp() {
    let current = this.heap.length - 1;
    while (current > 0) {
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
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(67);
minHeap.insert(60);
minHeap.insert(8);
minHeap.insert(3);
console.log(minHeap.heap);
