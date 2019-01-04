//Input is a sorted, rotated array and a target value
//Output is the index of the target value
//Solved in log(n) time
function findRotatedIndex(arr, n, s = 0, e = arr.length - 1) {
  if (s === e && arr[s] !== n) return -1;
  if (arr[e] > arr[s] && (n < arr[s] || n > arr[e])) return -1;
  let m = findMid(s, e);
  if (arr[m] === n) return m;
  if (arr[s] < arr[m] && arr[m] > n && arr[s] <= n) {
    return findRotatedIndex(arr, n, s, m - 1);
  }
  if (arr[e] > arr[m] && arr[m] < n && arr[e] >= n) {
    return findRotatedIndex(arr, n, m + 1, e);
  }
  if (arr[s] > arr[m] && (n > arr[s] || n < arr[m])) {
    return findRotatedIndex(arr, n, s, m - 1);
  }
  if (arr[e] < arr[m] && (n > arr[m] || n < arr[e])) {
    return findRotatedIndex(arr, n, m + 1, e);
  }
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}

module.exports = findRotatedIndex;
