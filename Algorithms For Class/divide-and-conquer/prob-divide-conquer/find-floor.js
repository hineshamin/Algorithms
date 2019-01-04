//Input is a sorted array and a target value
//Output is the number that is the closest to or equal to the target value
//Solved in log(n) time
function findFloor(arr, n, s = 0, e = arr.length - 1) {
  if (n > arr[arr.length - 1]) return arr[arr.length - 1];
  if (n < arr[0]) return -1;
  let m = findMid(s, e);
  if (arr[m] === n) return n;
  if (arr[m] > n && arr[m - 1] < n) return arr[m - 1];
  if (arr[m] < n && arr[m + 1] > n) return arr[m];
  if (arr[m] > n) return findFloor(arr, n, s, m - 1);
  if (arr[m] < n) return findFloor(arr, n, m + 1, e);
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}

module.exports = findFloor;
