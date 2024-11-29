// Given an array arr[] with non-negative integers representing the height of blocks.
// If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.

function trappingWater(arr) {
  const n = arr.length;

  const leftMax = Array(n).fill(0);

  leftMax[0] = arr[0];

  const rightMax = Array(n).fill(0);

  rightMax[n - 1] = arr[n - 1];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  for (let j = n - 2; j >= 0; j--) {
    rightMax[j] = Math.max(rightMax[j + 1], arr[j]);
  }

  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += Math.min(leftMax[i], rightMax[i]) - arr[i];
  }
  return sum;
}

console.log(trappingWater([4, 1, 3]));
