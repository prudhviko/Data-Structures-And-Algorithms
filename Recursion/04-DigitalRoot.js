// You are given a number n. You need to find the digital root of n. DigitalRoot of a number is the recursive sum of its digits until we get a single digit number.

function digitalRoot(num) {
  if (num <= 9) return num;
  return digitalRoot((num % 10) + Math.floor(num / 10));
}

console.log(digitalRoot(99999));
