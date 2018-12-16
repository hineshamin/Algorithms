// https://www.codewars.com/kata/51b66044bce5799a7f000003
// This program takes a roman numeral and coverts it to an integer or takes an integer and converts it to roman numerals

let RomanNumerals = {};
RomanNumerals['conversiontable'] = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
RomanNumerals['toRoman'] = function(n) {
  let str = '';
  let arr = n
    .toString()
    .split('')
    .map(function(x, index, array) {
      return x * Math.pow(10, array.length - index - 1);
    });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 1000) {
      let m = arr[i] / 1000;
      for (let j = 0; j < m; j++) {
        str += 'M';
      }
    }
    if (arr[i] == 900) {
      str += 'CM';
    }
    if (arr[i] >= 500 && arr[i] < 900) {
      str += 'D';
      let c = (arr[i] % 500) % 100;
      for (let j = 0; j < c; j++) {
        str += 'C';
      }
    }
    if (arr[i] == 400) {
      str += 'CD';
    }
    if (arr[i] >= 100 && arr[i] < 400) {
      let c = arr[i] % 100;
      for (let j = 0; j < c; j++) {
        str += 'C';
      }
    }
    if (arr[i] === 90) {
      str += 'XC';
    }
    if (arr[i] >= 50 && arr[i] < 90) {
      str += 'L';
      let x = (arr[i] % 50) % 10;
      for (let j = 0; j < x; j++) {
        str += 'X';
      }
    }
    if (arr[i] === 40) {
      str += 'XL';
    }
    if (arr[i] >= 10 && arr[i] < 40) {
      let x = arr[i] % 10;
      for (let j = 0; j < x; j++) {
        str += 'X';
      }
    }
    if (arr[i] === 9) {
      str += 'IX';
    }
    if (arr[i] >= 5 && arr[i] < 9) {
      str += 'V';
      let x = arr[i] % 5;
      for (let j = 0; j < x; j++) {
        str += 'I';
      }
    }
    if (arr[i] === 4) {
      str += 'IV';
    }
    if (arr[i] >= 1 && arr[i] < 4) {
      for (let j = 0; j < arr[i]; j++) {
        str += 'I';
      }
    }
  }
  return str;
};

RomanNumerals['fromRoman'] = function(str) {
  sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'M') {
      sum += 1000;
    }
    if (str[i] === 'D') {
      sum += 500;
    }
    if (str[i] === 'C') {
      sum += 100;
    }
    if (str[i] === 'L') {
      sum += 50;
    }
    if (str[i] === 'X') {
      sum += 10;
    }
    if (str[i] === 'I' && str[i + 1] === 'V') {
      sum += 4;
    } else if (str[i] === 'V' && str[i - 1] !== 'I') {
      sum += 5;
    } else if (str[i] === 'I') {
      sum += 1;
    }
  }
  return sum;
};
