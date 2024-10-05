// <================ Replace All Instances of a Substring ====================>

const replace = (str, target, replacement) => {
  let word = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (word[i] == target) {
      word[i] = replacement;
    }
  }
  return word.join(" ");
};

const str = "replace me by him";
const target = "me";
const replacement = "him";

const res = replace(str, target, replacement);
console.log(res);
