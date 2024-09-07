// <============================= implementing linked list with insertion deletion =======================>

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

  insertion(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  // deleting the head
  deletion() {
    if (this.head === null) {
      console.log("head empty");
      return;
    }
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
      return;
    }
  }

  //   deleting specific value
  deleteSpecific(value) {
    let current = this.head;
    let previous = null;
    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      console.log("value not found");
      return;
    }
    previous.next = current.next;
  }

  // deleting the tail of the linked list
  deleteTail() {
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = null;
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
node.insertion(1);
node.insertion(2);
node.insertion(3);
node.insertion(4);
node.insertion(5);
node.insertion(6);
node.display();

// node.deletion();
// node.display();

// node.deleteSpecific(5);
// node.display();

node.deleteTail();
node.display();
