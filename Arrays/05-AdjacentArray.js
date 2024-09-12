//  find maximum for every adjacent pairs in the array.

function adjacentArray(arr) {
  let max = [];
  for (let i = 0; i < arr.length - 1; i++) {
    max.push(Math.max(arr[i], arr[i + 1]));
  }
  return max;
}

console.log(adjacentArray([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
