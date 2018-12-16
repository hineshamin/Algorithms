// https://www.codewars.com/kata/55f89832ac9a66518f000118
// Algorithm that simplifies an input polynomial

function simplify(poly) {
  //Get negatives and positives
  let p = getPositives(poly);
  let m = getNegatives(poly);
  //Convert each to object and combine
  let pObj = combineOne(p);
  let mObj = combineOne(m);
  //Get the unique keys from each
  let pObjKeys = Object.keys(pObj);
  let mObjKeys = Object.keys(mObj);
  let keys = pObjKeys.concat(mObjKeys);
  let keysSet = new Set(keys);
  keys = Array.from(keysSet);
  //Create a final object with the correct amount of variables
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = (pObj[keys[i]] || 0) - (mObj[keys[i]] || 0);
  }
  let finalArr = objToArr(newObj);
  return arrToString(finalArr);
}

//Get all the positives values in an arr
function getPositives(poly) {
  p = [];
  plus = poly.split('+');
  for (let i = 0; i < plus.length; i++) {
    let val = plus[i].split('-')[0];
    if (!parseInt(val[0]) && parseInt(val[0]) !== 0) {
      val =
        '1' +
        val
          .split('')
          .sort()
          .join('');
    } else if (parseInt(val[0]) !== 0) {
      val =
        val[0] +
        val
          .slice(1)
          .split('')
          .sort()
          .join('');
    }
    p.push(val);
  }
  if (poly[0] === '-') {
    return p.slice(1);
  }
  return p;
}

//Get all the negative values in an arr
function getNegatives(poly) {
  m = [];
  minus = poly.split('-');
  for (let i = 0; i < minus.length; i++) {
    let val = minus[i].split('+')[0];
    if (!parseInt(val[0]) && parseInt(val[0]) !== 0) {
      val =
        '1' +
        val
          .split('')
          .sort()
          .join('');
    } else if (parseInt(val[0]) !== 0) {
      val =
        val[0] +
        val
          .slice(1)
          .split('')
          .sort()
          .join('');
    }
    m.push(val);
  }
  return m.slice(1);
}

//Combine one arr into an obj of frequencies
function combineOne(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].slice(findSlice(arr[i]))] =
      (obj[arr[i].slice(findSlice(arr[i]))] || 0) +
      parseInt(arr[i].slice(0, findSlice(arr[i])));
  }
  return obj;
}

//Return the first index of a letter to figure out where to slice
function findSlice(s) {
  return s.split('').findIndex(x => !parseInt(x) && parseInt(x) !== 0);
}

//Convert the final Obj to an array
function objToArr(obj) {
  let keys = Object.keys(obj);
  keys = sortKeys(keys);
  let arr = [];
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] !== 0) {
      if (obj[keys[i]] === 1) {
        arr.push(keys[i]);
      } else if (obj[keys[i]] === -1) {
        arr.push('-' + keys[i]);
      } else {
        arr.push(obj[keys[i]].toString() + keys[i]);
      }
    }
  }
  return arr;
}

//Sort the keys by the intended instructions
function sortKeys(keys) {
  return keys.sort(function(a, b) {
    if (a.length !== b.length) {
      return a.length > b.length;
    }
    return a > b;
  });
}

//Convert to the final output string
function arrToString(arr) {
  let s = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '-') {
      s += arr[i];
    } else {
      s += '+' + arr[i];
    }
  }
  if (s[0] === '+') {
    s = s.slice(1);
  }
  return s;
}
