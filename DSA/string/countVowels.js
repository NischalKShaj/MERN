// <======================== file to count vowels and consonants ===============>

const count = (str) => {
  const vowels = str.match(/[aeiou]/gi);
  const consonants = str.match(/[bcdfghjklmnpqrstvwzyz]/gi);

  return {
    vowels: vowels ? vowels.length : 0,
    consonants: consonants ? consonants.length : 0,
  };
};

const str = "Nischal";
const res = count(str);
console.log(res);
