// <========================== file to reverse a queue recursively =============>

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.front === null) {
      this.front = this.rear = node;
    }
    this.rear.next = node;
    this.rear = node;
  }
  dequeue() {
    if (this.front === null) {
      return null;
    }
    let value = this.front.value;
    this.front = this.front.next;
    return value;
  }
  isEmpty() {
    return this.front === null;
  }
  display() {
    let current = this.front;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  reverse() {
    if (!this.isEmpty()) {
      let value = this.dequeue();
      this.reverse();
      this.enqueue(value);
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.display();

queue.reverse();

queue.display();
