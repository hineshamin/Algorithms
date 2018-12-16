// https://www.codewars.com/kata/550f22f4d758534c1100025a
// The algorithm takes in a list of directions and then reduces them by eliminating
// unecessary directions (NORTH then SOUTH is unecessary)
// Ex. ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] => ["WEST"]

function dirReduc(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === 'NORTH') {
      if (arr[i + 1] === 'SOUTH') {
        arr = removeArrayIndexAt(arr, i);
        i = -1;
      }
    } else if (arr[i] == 'SOUTH') {
      if (arr[i + 1] === 'NORTH') {
        arr = removeArrayIndexAt(arr, i);
        i = -1;
      }
    } else if (arr[i] == 'EAST') {
      if (arr[i + 1] === 'WEST') {
        arr = removeArrayIndexAt(arr, i);
        i = -1;
      }
    } else if (arr[i] == 'WEST') {
      if (arr[i + 1] === 'EAST') {
        arr = removeArrayIndexAt(arr, i);
        i = -1;
      }
    } else {
      continue;
    }
    i++;
  }
  return arr;
}

function removeArrayIndexAt(arr, i) {
  return arr.slice(0, i).concat(arr.slice(i + 2));
}
