//Check if one string is a permutation of the other
//My solution
function perm(s1, s2) {
  let freq = stringToFreq(s1);
  let freq2 = stringToFreq(s2);
  return compareObj(freq1, freq2);
}

function stringToFreq(s) {
  let freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

function compareObj(o1, o2) {
  for (let key in o1) {
    if (o1[key] !== o2[key]) {
      return false;
    }
  }
  return true;
}

//Solution from book just having one frequency counter
function perm(s1, s2) {
  let freq = stringToFreq(s1);
  for (let char of s2) {
    if (!(char in freq)) {
      return false;
    }
    freq[char]--;
    if (freq[char] < 0) {
      return false;
    }
  }
  return true;
}

function stringToFreq(s) {
  let freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(perm('hello', 'lloeh'));
