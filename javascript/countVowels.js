// <========== file to count the vowels in a string ==========>

const vowelCount = (str) => {
  let count = 0;
  str = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

const str = "malayalam";
const result = vowelCount(str);
console.log(result);
