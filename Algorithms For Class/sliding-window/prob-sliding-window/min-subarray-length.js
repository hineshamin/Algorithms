//Input is an array of positive integers and a target sum
//Output is the minimum length of a contiguous subarray that reaches
//the target sum
function minSubarrayLength(arr, sum) {
  let currSum = arr[0];
  let i = 0;
  let j = 0;
  let minArrSize = Infinity;
  while (i < arr.length && j < arr.length) {
    if (currSum >= sum) {
      minArrSize = Math.min(minArrSize, j - i + 1);
      currSum -= arr[i];
      i++;
    } else {
      j++;
      currSum += arr[j];
    }
  }
  if (minArrSize == Infinity) return 0;
  return minArrSize;
}

module.exports = minSubarrayLength;
