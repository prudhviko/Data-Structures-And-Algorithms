// You are given an integer array arr[].
// Your task is to find the smallest positive number missing from the array.

function missingNumber(arr) {
  let freq = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i] - 1] = 1;
  }
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 0) {
      return i + 1;
    }
  }
  return arr.length + 1;
}

console.log(missingNumber(2, 4, 5, 6, 7));
