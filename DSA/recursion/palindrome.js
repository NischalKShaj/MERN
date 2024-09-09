// <================= file to check whether a string is palindrome =============>

const palindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - 1]) {
      return palindrome(str.slice(1, str.length - i - 1));
    } else {
      return false;
    }
  }
};

const str = "malayalam";
let result = palindrome(str);
console.log(result);
