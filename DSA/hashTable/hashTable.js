// <======================= file to implement hashTable ==================>

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

  set(key, value) {
    let index = this.hash(key);
    this.table[index] = value;
  }

  getValue(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    let index = this.hash(key);
    if (this.table[index] !== undefined) {
      this.table[index] = undefined;
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hash = new HashTable(10);
hash.set("Name", "Nischal");
hash.set("age", 22);
hash.set("place", "Pathanamthitta");
hash.display();

console.log(hash.getValue("age"));

hash.remove("place");
hash.display();
