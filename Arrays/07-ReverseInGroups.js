// Reverse every sub-array group of size k.

function reverseInGroups(arr, k, n) {
  for (let i = 0; i < n; i += k) {
    let left = i;

    let right = Math.min(i + k - 1, n - 1);

    let temp;

    while (left < right) {
      temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left += 1;
      right -= 1;
    }
  }
  return arr;
}

console.log(reverseInGroups([1, 2, 3, 4, 5], 3, 5)); // [3, 2, 1, 5, 4]
