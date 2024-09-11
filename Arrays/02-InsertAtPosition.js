// insert at particular position

function insertAtPosition(arr, element, position) {
  arr.splice(position, 0, element);
  return arr;
}

console.log(insertAtPosition([1, 2, 3, 4, 5], 6, 2)); // [1,2,6,3,4,5]
