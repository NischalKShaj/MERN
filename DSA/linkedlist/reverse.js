// <==================================== sorting a linked list ===================>

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  reverse() {
    let temp = this.head;
    let prev = null;
    let next = null;
    while (temp !== null) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    this.head = prev;
    this.display();
  }
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const node = new LinkedList();
node.insert(5);
node.insert(2);
node.insert(6);
node.insert(1);
node.insert(4);
node.insert(3);

node.reverse();
