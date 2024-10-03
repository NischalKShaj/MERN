// <================== file to get the max value from a BST ============>

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
  in_order(node, callback) {
    if (node !== null) {
      this.in_order(node.left, callback);
      callback(node.value);
      this.in_order(node.right, callback);
    }
  }
  maxVal(node = this.root) {
    if (node === null) {
      return false;
    }
    if (node.right === null) {
      return node.value;
    }
    return this.maxVal(node.right);
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(7);
let res = [];
bst.in_order(bst.root, (value) => {
  res.push(value);
});
console.log(res);

console.log(bst.maxVal());
