// Print numbers from 1 to n without the help of loops

const printNumbers = (N) => {
  if (N === 0) return;
  printNumbers(N - 1);
  console.log(N);
};

printNumbers(100);
