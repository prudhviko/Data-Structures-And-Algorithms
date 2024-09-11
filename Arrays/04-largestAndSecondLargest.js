//  largest and second largest element

function largestAndSecondLargest(arr) {
  let uniqueArray = Array.from(new Set(arr));

  uniqueArray.sort((a, b) => b - a);

  if (uniqueArray.length < 2) {
    return [uniqueArray[0], -1];
  } else {
    return [uniqueArray[uniqueArray[0]], uniqueArray[uniqueArray[1]]];
  }
}

console.log(largestAndSecondLargest([1, 2, 3, 4, 5])); // [5, 4]
