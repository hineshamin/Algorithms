//[3]
//[-2,-1]

//0
//[], [3]
//[-2,-1], []

function findMedianSortedArrays(nums1, nums2) {
  if (nums2.length < nums1.length) return findMedianSortedArrays(nums2, nums1);
  let s = 0;
  let e = nums1.length;
  let isEven = (nums1.length + nums2.length) % 2 === 0;
  while (true) {
    let x = findMid(s, e);
    let y = Math.floor((nums1.length + nums2.length + 1) / 2) - x;
    if (
      (nums1[x - 1] || -Infinity) <= (nums2[y] || Infinity) &&
      (nums2[y - 1] || -Infinity) <= (nums1[x] || Infinity)
    ) {
      let val1 = Math.max(
        x === 0 ? -Infinity : nums1[x - 1],
        y === 0 ? -Infinity : nums2[y - 1]
      );
      let val2 = Math.min(
        x === nums1.length ? Infinity : nums1[x],
        y === nums2.length ? Infinity : nums2[y]
      );
      if (isEven) return (val1 + val2) / 2;
      return val1;
    } else if (nums1[x - 1] > nums2[y]) e = x;
    else s = x + 1;
  }
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}

let n1 = [];
let n2 = [-2, -1];

console.log(findMedianSortedArrays(n1, n2));
