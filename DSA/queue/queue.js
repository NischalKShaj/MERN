// <=============== file to implement queue===============>

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
      return;
    }
    this.rear.next = node;
    this.rear = node;
  }

  dequeue() {
    if (this.front === null) {
      return;
    }
    this.front = this.front.next;

    if (this.front === null) {
      this.front = this.rear;
    }
  }

  display() {
    let current = this.front;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
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

queue.dequeue();
queue.display();
