// Given an integer N. Find the number of digits that appear in its factorial.

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function numberOfDigitsInFactorial(N) {
  let fact = factorial(N);
  let factString = fact.toString();
  return factString.length;
}

let N = 5;
let digitCount = numberOfDigitsInFactorial(N);
console.log(digitCount);
