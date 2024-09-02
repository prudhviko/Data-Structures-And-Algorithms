// Given number N check if it is prime or not.

function isPrime(N) {
  if (N === 1) return "False";
  for (let i = 2; i < N; i++) {
    if (N % i === 0) {
      return "False";
    }
  }
  return "True";
}

console.log(isPrime(32));
