// <============================ file to implement trie ====================>

class Node {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node());
      }
      node = node.children.get(char);
    }
    node.end = true;
    node.children.set("*", new Node());
  }
  // for displaying the trie
  display() {
    let res = [];
    this.traverse(this.root, "", res);
    return res.join("\n");
  }
  traverse(node, current, res) {
    if (node.end) {
      res.push(current);
    }
    for (let [char, neighbor] of node.children) {
      this.traverse(neighbor, current + char, res);
    }
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ant");
trie.insert("banana");
console.log(trie.display());
