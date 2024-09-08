// <============================== removing the mid element =========================>

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
      return;
    }
    node.next = this.top;
    this.top = node;
  }

  mid() {
    let middle = Math.floor(this.size / 2);
    this.removeMid(middle);
  }

  removeMid(middle) {
    let current = this.top;
    let index = 0;
    while (current !== null && index < middle - 1) {
      current = current.next;
      index++;
    }
    if (current === null) {
      return;
    }
    current.next = current.next.next;
  }

  display() {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(0);

stack.display();

stack.mid();
stack.display();
