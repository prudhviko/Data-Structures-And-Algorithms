// Given a positive integer value N. The task is to find how many numbers less than or equal to N have numbers of divisors exactly equal to 3.

function exactly3Divisors(N) {
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count += 1;
    }
    if (count === 3) answer += 1;
  }

  return answer;
}

console.log(exactly3Divisors(6));
