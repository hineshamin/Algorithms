// https://www.codewars.com/kata/54b724efac3d5402db00065e
// This program translates morse code to a string

decodeMorse = function(morseCode) {
  morseCode = morseCode.trim();
  var arrwords = morseCode.split('   ');
  var arrletters = arrwords.map(x => x.split(' '));
  var str = '';
  for (var i = 0; i < arrletters.length; i++) {
    for (var j = 0; j < arrletters[i].length; j++) {
      str += MORSE_CODE[arrletters[i][j]];
    }
    str += ' ';
  }
  return str.slice(0, str.length - 1);
};
