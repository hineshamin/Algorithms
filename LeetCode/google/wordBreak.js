//https://leetcode.com/problems/word-break/
function wordBreak(s, wordDict) {
  if (s === '') return true;
  for (let word of wordDict) {
    if (word === s.slice(0, word.length)) {
      if (wordBreak(s.slice(word.length), wordDict)) return true;
    }
  }
  return false;
}
