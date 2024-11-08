// write a js program to calculate the number of nodes in the left side of a BST

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class Bst {
  constructor() {
    this.root = null;
    this.length = 0;
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
  countLeftSubNode() {
    if (this.root === null || this.root.left === null) return null;
    return this.countSub(this.root.left);
  }
  countSub(node) {
    if (node === null) return 0;
    return 1 + this.countSub(node.left) + this.countSub(node.right);
  }
  in_order(node, callback) {
    if (node !== null) {
      this.in_order(node.left, callback);
      callback(node.value);
      this.in_order(node.right, callback);
    }
  }
}

const bst = new Bst();
bst.insert(3);
bst.insert(2);
bst.insert(6);
bst.insert(4);
bst.insert(1);

console.log("length", bst.countLeftSubNode());
