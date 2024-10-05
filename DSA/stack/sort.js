// <================ sorting a stack using temp stack ==========>

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
    if (this.top == null) {
      return null;
    }
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    if (this.top === null) {
      return null;
    }
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

const sort = (original) => {
  const temp = new Stack();

  while (!original.isEmpty()) {
    let current = original.pop();

    while (!temp.isEmpty() && temp.peek() > current) {
      original.push(temp.pop());
    }
    temp.push(current);
  }
  while (!temp.isEmpty()) {
    original.push(temp.pop());
  }
};

const stack = new Stack();
stack.push(2);
stack.push(4);
stack.push(1);
stack.push(3);

stack.display();

sort(stack);

stack.display();
