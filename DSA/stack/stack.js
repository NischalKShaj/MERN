// <=========================== file to implement stack using linked list ===============>

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
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

  pop() {
    if (this.top === null) {
      console.log("stack underflow");
      return;
    }
    this.top = this.top.next;
  }

  peek() {
    return this.top.value;
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

let peek = stack.peek();
console.log("peek", peek);

stack.pop();

stack.display();
