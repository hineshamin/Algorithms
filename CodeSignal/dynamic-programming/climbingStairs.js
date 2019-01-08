//You can climb a staircase 1 or 2 step at a time. Calculate
//the number of distinct ways you can climb to the top

function climbingStairs(n) {
  let T = [0, 1, 2];
  if (n <= 2) return T[n];
  for (let i = 3; i <= n; i++) {
    T[i] = T[i - 1] + T[i - 2];
  }
  return T[n];
}
