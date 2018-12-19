//https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript
//This algorithm will sum all the squares in all nested arrays

function sumSquares(l) {
  let sum = 0;
  function helper(l) {
    for (let n of l) {
      if (Array.isArray(n)) helper(n);
      else {
        sum += n * n;
      }
    }
  }
  helper(l);
  return sum;
}
