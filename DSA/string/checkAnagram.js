// <================= file to check for the anagram =======================>

const anagram = (str1, str2) => {
  const helper = (str) => {
    let count = {};
    str = str.trim();
    for (let i of str) {
      count[i] = (count[i] || 0) + 1;
    }
    return count;
  };
  const count1 = helper(str1);
  const count2 = helper(str2);

  const key1 = Object.keys(count1);
  const key2 = Object.keys(count2);

  if (key1.length !== key2.length) return false;

  for (let key in key1) {
    if (count2[key] !== count1[key]) return false;
  }
  return true;
};

const str1 = "node ";
const str2 = "ndoe";

const result = anagram(str1, str2);
console.log(result);
