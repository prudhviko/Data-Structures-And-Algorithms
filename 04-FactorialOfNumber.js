// Given a positive integer N. The task is to find factorial of N.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
