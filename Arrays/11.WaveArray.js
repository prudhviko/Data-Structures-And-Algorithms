// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place). In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5]

function waveArray(n, arr) {
  let i = 0;

  if (n % 2 === 1) {
    while (i < n - 2) {
      if (arr[i + 1] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      i += 2;
    }
  } else {
    while (i < n) {
      if (arr[i + 1] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
      i += 2;
    }
  }

  return arr;
}

let n = 5;
let arr = [1, 2, 3, 4, 5];

console.log(waveArray(n, arr));
