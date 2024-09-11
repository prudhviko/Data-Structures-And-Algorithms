// Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array. If both elements have the same frequency, then return the smaller element.

function mostFrequent(arr, x, y) {
  let xCount = 0,
    yCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      xCount++;
    } else if (arr[i] === y) {
      yCount++;
    }
  }

  if (xCount > yCount) {
    return x;
  } else if (yCount > xCount) {
    return y;
  } else {
    return Math.min(x, y);
  }
}

console.log(mostFrequent([1, 2, 3, 4, 5, 2, 2], 2, 3)); // 2
