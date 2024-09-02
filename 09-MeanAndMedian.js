// Given an array a[ ] of size N. The task is to find the median and mean of the array elements

function meanAndMedian(N, a) {
  let mean = a.reduce((acc, curr) => acc + curr, 0) / N;
  let median = 0;

  a.sort((a, b) => a - b);

  if (N % 2 === 0) {
    median = Math.floor((a[N / 2] + a[N / 2 - 1]) / 2);
  } else {
    median = a[Math.floor(N / 2)];
  }

  return [mean, median];
}

console.log(meanAndMedian(5, [1, 2, 19, 28, 5]));
