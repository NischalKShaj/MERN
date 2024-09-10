// <================== hash table to remove duplicates =============>

const duplicate = (word) => {
  let str = word.split(" ");
  let count = {};
  for (let s of str) {
    if (count[s] !== 1) {
      count[s] = (count[s] || 0) + 1;
    }
  }
  return count;
};

const word = "hello my name hello";
const result = duplicate(word);
console.log(result);
