class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.rear = this.front = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.front === undefined) {
      console.log("queue underflow");
      return;
    }
    this.front = this.front.next;
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
queue.display();

queue.dequeue();
queue.display();
