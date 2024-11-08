// write a js program to calculate the number of nodes in the left side of a BST

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
    while (current) {
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
  countLeft() {
    if (this.root === null || this.root.left === null) {
      return null;
    }
    return this.leftSub(this.root.left);
  }
  leftSub(node) {
    if (node === null) {
      return 0;
    }
    return 1 + this.leftSub(node.left) + this.leftSub(node.right);
  }
}

const bst = new BST();
bst.insert(3);
bst.insert(2);
bst.insert(6);
bst.insert(4);
bst.insert(1);

console.log("length", bst.countLeft());
