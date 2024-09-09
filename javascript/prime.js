// <======================== file to show the prime numbers ====================>

const prime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let primes = arr.filter(prime);
console.log(primes);
