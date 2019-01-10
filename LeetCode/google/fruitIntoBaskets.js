//https://leetcode.com/problems/fruit-into-baskets/

function totalFruit(tree) {
  let max = 0;
  let i = 0;
  let j = 0;
  let seen = new Map();
  while (i < tree.length && j < tree.length) {
    if (!seen.has(tree[j]) && seen.size === 2) {
      max = Math.max(j - i, max);
      seen.set(tree[i], seen.get(tree[i]) - 1);
      if (seen.get(tree[i]) === 0) seen.delete(tree[i]);
      i++;
    } else {
      if (!seen.has(tree[j])) seen.set(tree[j], 1);
      else seen.set(tree[j], seen.get(tree[j]) + 1);
      j++;
    }
  }
  max = Math.max(j - i, max);
  return max;
}
