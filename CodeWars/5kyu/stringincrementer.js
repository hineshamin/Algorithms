// https://www.codewars.com/kata/54a91a4883a7de5d7800009c
// This algorithm takes in a string and increments it
// Ex. foo0042 -> foo0043

function incrementString(strng) {
  str = '';
  if (strng.match(/\d+/g) === null) {
    return strng + '1';
  }
  str1 = strng.slice(0, strng.indexOf(strng.match(/\d+/g)));
  str2 = (Number(strng.match(/\d+/g)) + 1).toString();
  if (str2.length < strng.match(/\d+/g)[0].length) {
    str2 = padzeroes(str2, strng.match(/\d+/g)[0].length - str2.length);
  }
  return str1 + str2;
}

function padzeroes(str, numofzeroes) {
  for (var i = 0; i < numofzeroes; i++) {
    str = '0' + str;
  }
  return str;
}
