//Input is a sorted array and a target value
//Output is the number of occurences of the target value
//Solved in log(n) time
function sortedFrequency(arr, n) {
  let first = findMinOccurence(arr, n);
  let second = findMaxOccurence(arr, n);
  if (first === -1 || second === -1) return -1;
  return second - first + 1;
}

function findMaxOccurence(arr, n, s = 0, e = arr.length - 1) {
  if (s === e && arr[s] !== n) return -1;
  let m = findMid(s, e);
  if (arr[m] === n && arr[m + 1] !== n) return m;
  if (arr[m] === n && arr[m + 1] === n) {
    return findMaxOccurence(arr, n, m + 1, e);
  }
  if (arr[m] < n) return findMaxOccurence(arr, n, m + 1, e);
  if (arr[m] > n) return findMaxOccurence(arr, n, s, m - 1);
}

function findMinOccurence(arr, n, s = 0, e = arr.length - 1) {
  if (s === e && arr[s] !== n) return -1;
  let m = findMid(s, e);
  if (arr[m] === n && arr[m - 1] !== n) return m;
  if (arr[m] === n && arr[m - 1] === n) {
    return findMinOccurence(arr, n, s, m - 1);
  }
  if (arr[m] < n) return findMinOccurence(arr, n, m + 1, e);
  if (arr[m] > n) return findMinOccurence(arr, n, s, m - 1);
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}

module.exports = sortedFrequency;
