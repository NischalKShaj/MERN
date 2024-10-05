// <============================ file to remove the odd numbers from the node ============>

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
  // removing the odd numbers
  remove() {
    while (this.head !== null && this.head.value % 2 !== 0) {
      this.head = this.head.next;
    }

    if (this.head === null) {
      this.tail = null;
    }

    let current = this.head;
    while (current !== null && current.next !== null) {
      if (current.next.value % 2 !== 0) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    this.tail = current;
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
node.insert(1);
node.insert(1);
node.insert(2);
node.insert(3);
node.insert(4);
node.insert(5);
node.insert(6);
node.display();

node.remove();

node.display();
