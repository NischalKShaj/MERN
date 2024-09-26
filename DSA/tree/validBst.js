// <========================= file to check whether the tree is valid bst ===================>

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = node;
          return;
        } else {
          current = current.right;
        }
      }
    }
  }
  // function to check if the bst is valid or not
  isBST() {
    let prev = -Infinity;
    let isValid = true;
    function check(node) {
      if (node !== null && isValid) {
        check(node.left);
        if (node.value <= prev) {
          isValid = false;
          return;
        }
        prev = node.value;
        check(node.right);
      }
    }
    check(this.root);
    return isValid;
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(7);
console.log(bst.isBST());
