// You are given an array arr of positive integers.
// Your task is to find all the leaders in the array.
// An element is considered a leader if it is greater than or equal to all elements to its right.
// The rightmost element is always a leader.

function leaders(a) {
  let maximum = a[a.length - 1];
  let arr = [];
  arr.push(maximum);
  for (let i = a.length - 2; i >= 0; i--) {
    if (a[i] >= maximum) {
      maximum = a[i];
      arr.unshift(a[i]);
    }
  }
  return arr;
}

console.log(leaders([10, 4, 2, 4, 1]));
