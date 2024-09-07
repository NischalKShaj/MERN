// <======================== sorting the linked list =============================>

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
    }
    this.tail.next = node;
    this.tail = node;
  }

  sortList() {
    if (this.head === null) {
      console.log("list empty");
      return;
    }
    let current;
    let swapped;
    do {
      current = this.head;
      swapped = false;
      while (current.next !== null) {
        if (current.value > current.next.value) {
          let temp = current.value;
          current.value = current.next.value;
          current.next.value = temp;
          swapped = true;
        }
        current = current.next;
      }
    } while (swapped);
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

node.sortList();
node.display();
