// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// Creates a new string where '(' represents letters occurring more than once and ')' if more than once
// Ex. "recede" => '()()()'

function duplicateEncode(word) {
  var str = '';
  var capstr = word.toUpperCase();
  for (var i = 0; i < capstr.length; i++) {
    if (capstr.indexOf(capstr[i]) === capstr.lastIndexOf(capstr[i])) {
      str += '(';
    } else {
      str += ')';
    }
  }
  return str;
}
