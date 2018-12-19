// https://www.codewars.com/kata/recursive-replication/train/javascript
// This function will recursively replicate the second arg the number of time specified in the first arg

function replicate(times, number, arr = []) {
  if(arr.length) === times return arr;
  arr.push(number)
  return replicate(times, number, arr)
}


