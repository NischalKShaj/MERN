// <================== file to show how to avoid collision in hash table===================>

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(key, value) {
    let node = new Node(key, value);
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(`${current.key}:${current.value}`);
      current = current.next;
    }
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  addValue(key, value) {
    let bucket = this.hash(key);
    if (!this.table[bucket]) {
      this.table[bucket] = new LinkedList();
    }
    this.table[bucket].insert(key, value);
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        this.table[i].display();
      }
    }
  }
}

const hashTable = new HashTable(10);
hashTable.addValue("name", "Nischal");
hashTable.addValue("age", 22);
hashTable.addValue("place", "pta");

hashTable.display();
