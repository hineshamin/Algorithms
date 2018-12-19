//Non memoized version of calculating fibonacci numbers

// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 2) + fibonacci(n - 1);
// }

// memoized version

function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (n in memo) return memo[n];
  memo[n] = fibonacciMemo(n - 2, memo) + fibonacciMemo(n - 1, memo);
  return memo[n];
}

console.log(fibonacciMemo(10000));
