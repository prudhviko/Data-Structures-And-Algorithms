function toh(n, from_rod, to_rod, aux_rod) {
  if (n === 0) {
    return 0;
  }

  const moves = toh(n - 1, from_rod, aux_rod, to_rod);
  console.log(`move disk ${n} from rod ${from_rod} to rod ${to_rod}`);
  moves++;
  moves += toh(n - 1, aux_rod, to_rod, from_rod);
  return moves;
}

console.log(toh(3, "A", "C", "B"));
