function revString(s) {
  if (s.length === 0) return '';
  return s[s.length - 1] + revString(s.slice(0, s.length - 1));
}

function productOfNums(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * productOfNums(nums, i + 1);
}

function everyOtherChar(s, out = '', i = 0) {
  if (i === s.length) return out;
  if (i % 2 === 0) out += s[i];
  return everyOtherChar(s, out, i + 1);
}

function longestWord(strs, longest = 0, i = 0) {
  if (i === strs.length) return longest;
  if (strs[i].length > longest) longest = strs[i].length;
  return longestWord(strs, longest, i + 1);
}

function isPalindrome(s) {
  if (s.length <= 1) return true;
  if (s[0] !== s[s.length - 1]) return false;
  return isPalindrome(s.slice(1, s.length - 1));
}

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

// function gatherStrings(obj) {
//   let arr = [];

//   function helper(obj) {
//     let arr = [];
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') helper(obj[key]);
//       else if (typeof obj[key] === 'string') {
//         arr.push(obj[key]);
//       }
//     }
//   }

//   helper(obj);
//   return arr;
// }

// function gatherStrings(obj) {
//   let arr = [];
//   for (let key in obj) {
//     if (typeof obj[key] === 'object') {
//       arr = arr.concat(gatherStrings(obj[key]));
//     } else if (typeof obj[key] === 'string') {
//       arr.push(obj[key]);
//     }
//   }
//   return arr;
// }

function gatherStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      gatherStrings(obj[key], arr);
    } else if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    }
  }
  return arr;
}

function binarySearch(nums, val, s = 0, e = nums.length - 1) {
  let m = getMiddle(s, e);
  if (nums[m] === val) return m;
  if (s === e) return -1;
  if (nums[m] < val) s = m + 1;
  if (nums[m] > val) e = m - 1;
  return binarySearch(nums, val, s, e);
}

function getMiddle(s, e) {
  return Math.floor(s + e / 2);
}

console.log(binarySearch([1, 2], 2));
