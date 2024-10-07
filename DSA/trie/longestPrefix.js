// <===================== file to calculate the longest prefix ===================>

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
  // for finding the longest prefix
  longestPrefix() {
    return this.helper(this.root, "");
  }
  helper(node, prefix) {
    if (node.children.size === 0) {
      return prefix;
    }
    let longest = prefix;
    for (let [char, neighbor] of node.children) {
      if (char !== "*") {
        let childPrefix = this.helper(neighbor, prefix + char);
        if (childPrefix.length > longest.length) {
          longest = childPrefix;
        }
      }
    }
    return longest;
  }

  display() {
    let res = [];
    this.traverse(this.root, "", res);
    return res.join("\n");
  }
  traverse(node, word, res) {
    if (node.end) {
      res.push(word);
    }
    for (let [char, neighbor] of node.children) {
      this.traverse(neighbor, word + char, res);
    }
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("ant");
trie.insert("banana");
console.log(trie.display());
console.log("trie.longestPrefix()", trie.longestPrefix());
