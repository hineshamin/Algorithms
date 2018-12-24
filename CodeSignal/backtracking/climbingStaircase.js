// You have to climb a staircase of n steps and can skip up to k steps
// What are the ways you can climb the staircase

function climbingStaircase(n, k) {
  let arr = [];
  function helper(n, k, currPath = [], currPathSum = 0) {
    if (currPathSum === n) {
      arr.push(currPath);
      return;
    }
    if (currPathSum > n) {
      return;
    }
    for (let i = 1; i <= k; i++) {
      helper(n, k, [...currPath, i], currPathSum + i);
    }
  }
  helper(n, k);
  return arr;
}
