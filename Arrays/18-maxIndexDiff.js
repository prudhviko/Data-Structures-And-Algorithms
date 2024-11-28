// Given an array arr of positive integers.
// The task is to return the maximum of j - i subjected to the constraint of arr[i] < arr[j] and i < j.

function maximumIndex(arr) {
  const n = arr.length;

  const minLeft = new Array(n);
  minLeft[0] = arr[0];
  for (let i = 1; i < n; i++) {
    minLeft[i] = Math.min(minLeft[i - 1], arr[i]);
  }

  const maxRight = new Array(n);
  maxRight[n - 1] = arr[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    maxRight[j] = Math.max(maxRight[j + 1], arr[j]);
  }

  let i = 0,
    j = 0;
  let maxDiff = -1;

  while (i < n && j < n) {
    if (minLeft[i] <= maxRight[j]) {
      maxDiff = Math.max(maxDiff, j - i);
      j++;
    } else {
      i++;
    }
  }

  return maxDiff;
}

const arr = [3, 5, 4, 2];
console.log(maximumIndex(arr));
