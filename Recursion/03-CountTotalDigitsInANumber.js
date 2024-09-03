// You are given a number n. You need to find the count of digits in n.

function countDigits(n) {
  if (n < 10) {
    return 1;
  }
  return 1 + countDigits(Math.floor(n / 10));
}

const number = 12345;
const result = countDigits(number);
console.log(`The total number of digits in ${number} is ${result}.`);
