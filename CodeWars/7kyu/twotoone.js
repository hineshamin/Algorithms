// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
// Takes 2 strings and returns a new sorted string with distinct letters

function longest(s1, s2) {
  var str = '';
  var arrs = s1.split('').concat(s2.split(''));
  arrs.sort();
  var rs = arrs.join('');
  for (var i = 0; i < rs.length; i++) {
    if (str.includes(rs[i])) {
      continue;
    } else {
      str += rs[i];
    }
  }
  return str;
}
