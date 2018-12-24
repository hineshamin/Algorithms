function sumSubsets(arr, num) {
  let a = new Set();
  function helper(arr, idx = 0, currSum = 0, currPath = []) {
    if (currSum === num) {
      a.add(JSON.stringify(currPath));
      return;
    }
    for (let i = idx; i < arr.length && arr[i] <= num; i++) {
      helper(arr, i + 1, currSum + arr[i], [...currPath, arr[i]]);
    }
  }
  helper(arr);
  return Array.from(a).map(JSON.parse);
}

let a = [1, 2, 2, 3, 4, 5];
console.log(sumSubsets(a, 5));
