function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let m = findMiddle(arr);
  let a = arr.slice(0, m);
  let b = arr.slice(m);
  return merge(mergeSort(a), mergeSort(b));
}

function findMiddle(arr) {
  return Math.floor(arr.length / 2);
}

function merge(arr1, arr2) {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) return [...arr, ...arr2.slice(j)];
  if (j === arr2.length) return [...arr, ...arr1.slice(i)];
}

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20])
