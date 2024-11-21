// Given a sorted array of positive integers. Your task is to rearrange the array elements alternatively
// i.e first element should be max value,
// second should be min value, third should be second max, fourth should be second min and so on.

function rearrange(a, n) {
  const temp = Array(n).fill(0);
  let left = 0;
  let right = n - 1;
  let index = 0;
  while (left <= right) {
    if (index % 2 === 0) {
      temp[index] = a[right];
      right -= 1;
      index += 1;
    } else {
      temp[index] = a[left];
      left += 1;
      index += 1;
    }
  }
  return temp;
}

console.log(rearrange([1, 2, 3, 4, 5, 6], 6));
