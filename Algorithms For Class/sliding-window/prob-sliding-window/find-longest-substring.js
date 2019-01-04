//Input is a string
//Output is the longest substring without repeated characters
function findLongestSubstring(s) {
  let longest = 0;
  let i = 0;
  let j = 0;
  let seen = new Set();
  while (i < s.length && j < s.length) {
    longest = Math.max(longest, j - i);
    if (seen.has(s[j])) {
      seen.delete(s[i]);
      i++;
    } else {
      seen.add(s[j]);
      j++;
    }
  }
  return Math.max(longest, j - i);
}

module.exports = findLongestSubstring;
