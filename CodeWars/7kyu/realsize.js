// https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript
// This algorithm finds the number of integers in a multidimesional array

function realSize(arrays) {
  let count = 0;
  function helper(arrays) {
    for (let array of arrays) {
      if (Array.isArray(array)) {
        helper(array);
      } else if (typeof array === 'number') count++;
    }
  }
  helper(arrays);
  return count;
}
