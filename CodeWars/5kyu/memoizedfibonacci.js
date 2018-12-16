// https://www.codewars.com/kata/529adbf7533b761c560004e5
// Computes the nth fibonacci number

function fibonacci(n) {
  arr = [1, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[arr.length - 1];
}
