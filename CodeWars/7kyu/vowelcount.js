// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Return the number of vowels in the string

function getCount(str) {
  var vowelsCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
