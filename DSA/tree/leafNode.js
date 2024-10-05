// <================ file to find the leaf nodes ===================>

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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
  // for finding the leaf nodes
  leaf(node, callback) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        callback(node.value);
      }
      this.leaf(node.left, callback);
      this.leaf(node.right, callback);
    }
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(7);

let res = [];
bst.leaf(bst.root, (value) => {
  res.push(value);
});

console.log(res);
