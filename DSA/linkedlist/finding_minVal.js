// <========================== for finding the minimum value in a linked list ===================>

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

  findLowest() {
    let minVal = this.head.value;
    let current = this.head.next;
    while (current !== null) {
      if (current.value < minVal) {
        minVal = current.value;
      }
      current = current.next;
    }
    return minVal;
  }
}

const list = new LinkedList();
list.insert(2);
list.insert(5);
list.insert(6);
list.insert(4);
list.insert(1);
list.insert(3);

let lower = list.findLowest();
console.log(lower);
