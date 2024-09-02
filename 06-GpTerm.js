// Given the first 2 terms A and B of a Geometric Series. The task is to find the Nth term of the series.

function termOfGp(A, B, N) {
  let r = B / A;
  return A * Math.pow(r, N - 1);
}

console.log(termOfGp(2, 3, 1)); // 2
