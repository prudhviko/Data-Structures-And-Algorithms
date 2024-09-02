// Given two numbers a and b, find the sum of a and b. Since the sum can be very large, find the sum modulo 109+7.

function sumUnderModulo(a, b) {
  const MOD = 1000000007; // This is 10^9 + 7
  const sum = (BigInt(a) + BigInt(b)) % BigInt(MOD);
  return sum;
}

let a = 9223372036854775807;
let b = 9223372036854775807;
console.log(sumUnderModulo(a, b)); // Output: 582344006
