function quickSort(arr, s = 0, e = arr.length - 1) {
  if (s < e) {
    let rand = pickRandom(s, e);
    let i = pivot(arr, rand, s, e);
    quickSort(arr, s, i - 1);
    quickSort(arr, i + 1, e);
  }
}

function pickRandom(s, e) {
  return Math.floor(s + Math.random() * (e - s + 1));
}

function pivot(arr, idx, s, e) {
  [arr[idx], arr[e]] = [arr[e], arr[idx]];
  let pivotElem = arr[e];
  let i = s;
  let j = e - 1;
  while (i <= j) {
    while (arr[i] < pivotElem) {
      i++;
    }
    while (arr[j] > pivotElem) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  [arr[i], arr[e]] = [arr[e], arr[i]];
  return i;
}
