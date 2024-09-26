// <================================ file to implement the max heap ===================>

class MaxHeap {
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
}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(67);
maxHeap.insert(60);
maxHeap.insert(8);
maxHeap.insert(3);
console.log(maxHeap.heap);
