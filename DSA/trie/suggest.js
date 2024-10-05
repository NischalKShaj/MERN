// <================= file to suggest words based on the prefix ==============>

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
  // function for performing the suggest
  suggest(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char);
    }
    let words = [];
    this.collect(node, word, words);
    return words;
  }
  collect(node, word, words) {
    if (node.end) {
      words.push(word);
    }
    for (let [char, neighbor] of node.children) {
      this.collect(neighbor, word + char, words);
    }
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ant");
trie.insert("banana");
trie.insert("band");
console.log(trie.display());

console.log(trie.suggest("ab"));
console.log(trie.suggest("ap"));
