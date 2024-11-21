// Given an array arr[] of size N where every element is in the range from 0 to n-1.
// Rearrange the given array so that the transformed array arrT[i] becomes arr[arr[i]].

function arrange(arr, n) {
  for (let i = 0; i < n; i++) {
    arr[i] += (arr[arr[i]] % n) * n;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(arr[i] / n);
  }
}

const arr = [4, 0, 2, 1, 3];

const n = arr.length;

console.log("Original Array:", arr);

arrange(arr, n);

console.log("Transformed Array:", arr);
