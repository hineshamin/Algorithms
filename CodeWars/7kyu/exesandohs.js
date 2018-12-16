// https://www.codewars.com/kata/55908aad6620c066bc00002a
// The function return true if the same number of x's and o's, otherwise false

function XO(str) {
  var capstr = str.toUpperCase();
  var countx = 0;
  var counto = 0;
  for (var i = 0; i < capstr.length; i++) {
    if (capstr[i] === 'X') {
      countx += 1;
    } else if (capstr[i] === 'O') {
      counto += 1;
    } else {
      continue;
    }
  }
  if (countx === counto) {
    return true;
  }
  return false;
}
