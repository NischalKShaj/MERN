// <===================== file to show in-order pre-order and post-order traversal ================>

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
  pre_order(node, callback) {
    if (node !== null) {
      callback(node.value);
      this.pre_order(node.left, callback);
      this.pre_order(node.right, callback);
    }
  }
  post_order(node, callback) {
    if (node !== null) {
      this.post_order(node.left, callback);
      this.post_order(node.right, callback);
      callback(node.value);
    }
  }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(7);

const inOrder = [];
bst.in_order(bst.root, (value) => {
  inOrder.push(value);
});
console.log(inOrder);

const preOrder = [];
bst.pre_order(bst.root, (value) => {
  preOrder.push(value);
});
console.log(preOrder);

const postOrder = [];
bst.post_order(bst.root, (value) => {
  postOrder.push(value);
});
console.log(postOrder);
