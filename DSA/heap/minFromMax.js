// <======================== file to get the min value form a maxHeap ================>

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
  getMin() {
    let n = this.heap.length;
    let min = this.heap[Math.floor(n / 2)];
    for (let i = Math.floor(n / 2) + 1; i < n; i++) {
      if (this.heap[i] < min) {
        min = this.heap[i];
      }
    }
    return min;
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
console.log(maxHeap.getMin());
