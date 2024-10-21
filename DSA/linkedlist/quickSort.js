// <======================== file to show how to do quick sort on linked list ===============>

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
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
  sort() {
    this.head = this.quickSort(this.head, null);
  }
  quickSort(start, end) {
    if (start === end || start === null || start.next === null) {
      return start;
    }
    let pivot = this.partition(start, end);
    let sortedList = this.quickSort(start, pivot);
    pivot.next = this.quickSort(pivot.next, end);
    return sortedList;
  }
  partition(start, end) {
    let pivot = start;
    let tail = start;
    let current = start.next;
    while (current !== end) {
      if (current.value < pivot.value) {
        tail = tail.next;
        [tail.value, current.value] = [current.value, tail.value];
      }
      current = current.next;
    }
    [pivot.value, tail.value] = [tail.value, pivot.value];
    return pivot;
  }
}

const list = new LinkedList();
list.insert(2);
list.insert(5);
list.insert(1);
list.insert(4);
list.insert(3);
console.log("before sorting");
list.display();
list.sort();
console.log("after sorting");
list.display();
