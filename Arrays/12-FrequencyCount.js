// You are given an array arr[] containing positive integers. These integers can be from 1 to p, and some numbers may be repeated or absent. Your task is to count the frequency of all numbers that lie in the range 1 to n.

function frequencyCount(arr) {
  let freqArr = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    freqArr[arr[i] - 1] += 1;
  }

  return freqArr;
}

console.log(frequencyCount([2, 3, 2, 3, 5]));
