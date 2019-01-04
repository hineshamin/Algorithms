//https://app.codesignal.com/challenge/FkppNT5CtbmZgHLuP
//Figure out the combination of fibonacci numbers that add
//to the target sum with the number of numbers in the
//second parameter
//ex input: 29,6
//output: [1,1,1,2,3,21]

//Below is a brute force recursive approach trying every possibility
function fibonacciSnowman(n, k) {
  let pos = genNums(n);
  let foundPath;
  function helper(currSumPath = [], currSum = 0) {
    if (currSum <= n && currSumPath.length <= k) {
      if (currSum === n && currSumPath.length === k) {
        foundPath = currSumPath;
        return true;
      }
      for (let p of pos) {
        if (helper([...currSumPath, p], currSum + p)) return true;
      }
    }
  }
  helper();
  return foundPath;
}

function genNums(n) {
  let T = [];
  T[0] = 0;
  T[1] = 1;
  let i = 2;
  while (T[T.length - 1] <= n) {
    T[i] = T[i - 1] + T[i - 2];
    i++;
  }
  return T.slice(1, -1);
}
