//https://leetcode.com/problems/trapping-rain-water/
function trap(height) {
  let left = buildLeft(height);
  let right = buildRight(height);
  let amount = [];
  for (let i = 0; i < height.length; i++) {
    amount[i] = Math.min(left[i], right[i]) - height[i];
  }
  return amount.reduce((acc, val) => acc + val, 0);
}

function buildLeft(height) {
  let left = [height[0]];
  for (let i = 1; i < height.length; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }
  return left;
}

function buildRight(height) {
  let right = [];
  right[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }
  return right;
}
