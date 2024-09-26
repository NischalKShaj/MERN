//<=================== file to implement suffix search ===============>

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
    word = word.split("").reverse().join("");
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new Node());
      }
      node = node.children.get(char);
    }
    node.end = true;
    node.children.set("*", new Node());
  }
  // function for suffix search
  suffix(word) {
    let node = this.root;
    word = word.split("").reverse().join("");
    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ant");
trie.insert("banana");
console.log(trie.suffix("na"));
