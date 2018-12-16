//https://www.codewars.com/kata/56c04261c3fcf33f2d000534

function doubles(maxk, maxn) {
  let sum = 0;
  for (let i = 1; i < maxk + 1; i++) {
    for (let j = 1; j < maxn + 1; j++) {
      sum += v(i, j);
    }
  }
  return sum;
}

function v(k, n) {
  return 1 / (k * Math.pow(n + 1, 2 * k));
}
