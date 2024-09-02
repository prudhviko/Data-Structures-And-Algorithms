// Given a quadratic equation ax2 + bx + c = 0, find its roots.

function findRoots(a, b, c) {
  let d = b * b - 4 * a * c;

  if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    root1 = Math.floor(root1);
    root2 = Math.floor(root2);

    if (root1 > root2) {
      return [root1, root2];
    } else {
      return [root2, root1];
    }
  } else if (d === 0) {
    let root = -b / (2 * a);
    root = Math.floor(root);
    return [root, root];
  } else {
    return "Imaginary";
  }
}

let a = 1;
let b = -2;
let c = 1;

let result = findRoots(a, b, c);
if (result === -1) {
  console.log("Imaginary");
} else {
  console.log(result[0], result[1]);
}
