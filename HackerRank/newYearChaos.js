//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
function minimumBribes(q) {
  //Initial read to make sure values are not more than 2 ahead of where they started
  for (let i = 0; i < q.length; i++) {
    if (q[i] - 1 - i > 2) {
      console.log('Too chaotic');
      return;
    }
  }

  //This problem is basically counting the numbers of inversions
  //which is the number of spots a person is ahead of where they were
  //Use a divide and conquer algorithm to solve this
  let num = 0;

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let m = Math.floor(arr.length / 2);
    let a = arr.slice(0, m);
    let b = arr.slice(m);
    return merge(mergeSort(a), mergeSort(b));
  }

  function merge(a1, a2) {
    let i = 0;
    let j = 0;
    let ret = [];
    while (i < a1.length && j < a2.length) {
      if (a1[i] < a2[j]) {
        ret.push(a1[i]);
        i++;
      } else {
        num += a1.length - i;
        ret.push(a2[j]);
        j++;
      }
    }
    if (i === a1.length) {
      ret = [...ret, ...a2.slice(j)];
    }
    if (j === a2.length) {
      ret = [...ret, ...a1.slice(i)];
    }
    return ret;
  }

  mergeSort(q);
  console.log(num);
}
