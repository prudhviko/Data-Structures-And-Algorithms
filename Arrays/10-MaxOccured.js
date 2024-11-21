// find the maximum occurred integer in all ranges.

function maxOccured(n, l, r, maxx) {
  let freq = new Array(maxx + 2).fill(0);

  for (let i = 0; i < n; i++) {
    freq[l[i]] += 1;
    freq[r[i] + 1] -= 1;
  }

  let maxCount = 0;
  let result = -1;
  let currentCount = 0;

  for (let i = 0; i <= maxx; i++) {
    currentCount += freq[i];

    if (currentCount > maxCount) {
      maxCount = currentCount;
      result = i;
    } else if (currentCount === maxCount && result > i) {
      result = i;
    }
  }
  return result;
}

const n = 3;
const l = [1, 2, 3];
const r = [3, 5, 7];
const maxx = 7;

console.log(maxOccured(n, l, r, maxx));
