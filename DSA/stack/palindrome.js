// <========================== file to check whether the stack is palindrome or not =================>

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
    while (this.top === null) {
      this.top = node;
      return;
    }
    node.next = this.top;
    this.top = node;
  }

  isPalindrome() {
    let current = this.top;
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
      } else {
        start++;
        end--;
      }
    }
    return true;
  }
}
const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(2);
stack.push(3);

let res = stack.isPalindrome();
console.log(res);
