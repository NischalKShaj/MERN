const fs = require("fs");

fs.readFile("new.js", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

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
  minVal(node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.left === null) {
      return node.value;
    }
    return this.minVal(node.left);
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(7);

console.log(bst.minVal());
