// Given an array arr of non-negative numbers.
// The task is to find the first equilibrium point in an array.
// The equilibrium point in an array is an index (or position) such that the sum of all elements before that index is the same as the sum of elements after it.

function equilibriumPoint(arr) {
  const sum = arr.reduce((prev, next) => prev + next, 0);
  let prev = 0;
  let next = sum - arr[0];
  let flag = false;
  let index;
  for (let i = 1; i < arr.length; i++) {
    prev += arr[i - 1];
    next -= arr[i];
    if (prev === next) {
      flag = true;
      index = i + 1;
    }
  }
  if (flag) return index;
  else return -1;
}

console.log(equilibriumPoint([1, 3, 5, 2, 2]));
