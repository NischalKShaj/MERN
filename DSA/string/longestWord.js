// <========================= file to show the longest word ===================>

const longest = (str) => {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return { word: longest, length: longest.length };
};

const str = "find the longest string in the sentence";
const res = longest(str);
console.log(res);
