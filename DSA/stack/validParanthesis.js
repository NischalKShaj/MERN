// <============================ file to check valid parentheses ======================>

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
      return;
    }
    let poppedVal = this.top.value;
    this.top = this.top.next;
    return poppedVal;
  }

  isEmpty() {
    return this.top === null;
  }

  isValid(parentheses) {
    const stack = new Stack();
    for (let i = 0; i < parentheses.length; i++) {
      let char = parentheses[i];
      if (char === "{" || char === "[" || char === "(") {
        stack.push(char);
      } else if (char === "}" || char === "]" || char === ")") {
        let popped = stack.pop();
        if (
          (popped === "{" && char !== "}") ||
          (popped === "[" && char !== "]") ||
          (popped === "(" && char !== ")")
        ) {
          return false;
        }
      }
    }
    return stack.isEmpty();
  }
}

const stack = new Stack();
console.log(stack.isValid("[}"));
