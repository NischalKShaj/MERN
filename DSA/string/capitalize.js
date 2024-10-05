// <===================== file to capitalize the first char of each word in a sentence ==============>

const capitalize = (str) => {
  const word = str.split(" ");
  let newArr = [];
  for (let i = 0; i < word.length; i++) {
    let newWord = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    newArr.push(newWord);
  }
  return newArr.join(" ");
};

const str = "capitalize first char in the sentence";
const res = capitalize(str);
console.log(res);
