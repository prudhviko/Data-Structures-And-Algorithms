// You are given two numbers a and b. You need to find the multiplication of a and b under modulo M (M as 109+7).

function mulUnderModulo(a, b) {
  const MOD = 1000000007; // This is 10^9 + 7
  const mul = (BigInt(a) * BigInt(b)) % BigInt(MOD);
  return mul;
}

let a = 9223372036854775807;
let b = 9223372036854775807;

console.log(mulUnderModulo(a, b)); // Output: 582344006
