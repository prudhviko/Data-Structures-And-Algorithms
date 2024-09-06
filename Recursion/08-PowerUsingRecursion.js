// You are given two numbers n and p. You need to find np.

function powerUsingRecursion(n, p) {
  if (n === 0 || p === 0) return 1;

  if (p === 1) return n;

  return n * powerUsingRecursion(n, p - 1);
}

console.log(powerUsingRecursion(2, 3)); // 8
