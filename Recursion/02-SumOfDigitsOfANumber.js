// You are given a number n. You need to find the sum of digits of n.

function sumOfDigits(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

const number = 1234;
const result = sumOfDigits(number);
console.log(`The sum of the digits of ${number} is ${result}.`);
