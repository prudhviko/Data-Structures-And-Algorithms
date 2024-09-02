// You are given an interger n, find the absolute value of the interger n.

function absValue(n) {
  if (n < 0) {
    return -n;
  } else {
    return n;
  }
}

console.log(absValue(5));
console.log(absValue(-1000));
