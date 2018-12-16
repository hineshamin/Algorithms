// https://www.codewars.com/kata/525f4206b73515bffb000b21
// This algorithm adds really big numbers together represented as strings as they are too large to represent as integers

function add(a, b) {
  let result = '';
  let s1 = padStrings(a, b)[0];
  let s2 = padStrings(a, b)[1];
  let isTen = false;
  for (let i = 0; i < s1.length; i++) {
    let temp =
      parseInt(s2[s2.length - i - 1]) + parseInt(s1[s1.length - i - 1]);
    if (isTen) {
      temp += 1;
      isTen = false;
    }
    if (temp >= 10) {
      isTen = true;
      temp = temp % 10;
    }
    result = temp.toString() + result;
  }
  if (isTen) {
    result = '1' + result;
  }
  return result;
}

// Makes both number string the same length
function padStrings(a, b) {
  while (a.length < b.length) {
    a = '0' + a;
  }
  while (b.length < a.length) {
    b = '0' + b;
  }
  return [a, b];
}
