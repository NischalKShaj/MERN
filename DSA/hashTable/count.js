// <============================ file to show one example of hash table ===========>

const countLetter = (str) => {
  const count = {};
  for (let i of str) {
    count[i] = (count[i] || 0) + 1;
  }
  //   return count;
  let max = 0;
  let letter = "";
  for (let key in count) {
    if (count[key] > max) {
      max = count[key];
      letter = key;
    }
  }
  return letter;
};

const str = "ababcbdarsdfelbonoprs";
const result = countLetter(str);
console.log(result);
