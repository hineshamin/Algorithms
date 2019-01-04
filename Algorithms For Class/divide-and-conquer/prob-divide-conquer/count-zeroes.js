//Input is an array of 1's followed by 0's.
//Output is the number of 0's.
//Solved in log(n) time
function countZeroes(arr, s = 0, e = arr.length - 1) {
  let m = findMid(s, e);
  if (s === e && s === 0) return arr.length;
  if (s === e && s === arr.length - 1) return 0;
  if (arr[m] === 1 && arr[m + 1] === 0) return arr.length - m - 1;
  if (arr[m] === 1) {
    return countZeroes(arr, m + 1, e);
  }
  if (arr[m] === 0) {
    return countZeroes(arr, s, m - 1);
  }
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}

module.exports = countZeroes;
