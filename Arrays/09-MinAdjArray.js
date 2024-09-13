// find minimum adjacent difference in a circular array

function minAdjacentArray(arr, n) {
  let min = Math.abs(arr[0] - arr[n - 1]);
  for (let i = 0; i < n - 1; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);
    if (diff < min) {
      min = diff;
    }
  }
  return min;
}

console.log(minAdjacentArray([8, 4, 5, 3, 9], 5)); // 1
