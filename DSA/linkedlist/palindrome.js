// <====================== file to check palindrome in linked list ================>

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
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      this.size++;
    }
    this.tail.next = this.tail = node;
    this.size++;
  }

  isPalindrome() {
    let current = this.head;
    let arr = [];
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      if (arr[start] !== arr[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
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
// node.insert(5);
// node.insert(2);
// node.insert(6);
// node.insert(1);
// node.insert(4);
// node.insert(3);
node.insert(1);
node.insert(3);
node.insert(1);
node.insert(3);
node.insert(1);
const result = node.isPalindrome();
console.log(result);
