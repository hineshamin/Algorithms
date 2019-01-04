//Input is a sorted, rotated array
//Output is the number of rotations
//Solved in log(n) time
function findRotationCount(arr, s = 0, e = arr.length - 1) {
  if (arr[0] < arr[arr.length - 1]) return 0;
  let m = findMid(s, e);
  if (arr[m] > arr[m + 1]) return m + 1;
  if (arr[m] < arr[m - 1]) return m;
  if (arr[s] > arr[m]) return findRotationCount(arr, s, m - 1);
  else return findRotationCount(arr, m + 1, e);
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}

module.exports = findRotationCount;
