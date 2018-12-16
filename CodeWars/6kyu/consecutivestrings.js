// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// Input is a list of strings and output is the first
// longest k consecutive strings of the list

function longestConsec(strarr, k) {
  var lonstrlen = 0;
  var lonstr = '';
  var str = '';
  var n = strarr.length;
  if (n === 0 || n > j || k <= 0) {
    return '';
  }
  for (var i = 0; i < n - k + 1; i++) {
    for (var j = i; j < i + k; j++) {
      str += strarr[j];
    }
    if (str.length > lonstrlen) {
      lonstrlen = str.length;
      lonstr = str;
    }
    str = '';
  }
  return lonstr;
}
