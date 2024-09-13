//  rotate an array by d elements in counter-clockwise direction.

function rotateArray(arr, d) {
  console.log(arr.slice(d, arr.length).concat(arr.slice(0, d)));
}

rotateArray([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
