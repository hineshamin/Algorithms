//Return the longest contiguous subarray of an array of street lights
//with alternating color
//input: [1,2,1,2,3,1,4]
//output: 4

function cityStreetLights(lights) {
  if (lights.length < 2) return lights.length;
  let longest = 0;
  let i = 0;
  let tempMax;
  let max = -Infinity;
  while (i < lights.length - 1) {
    [tempMax, i] = checkSub(lights, i);
    max = Math.max(tempMax, max);
  }
  return max;
}

function checkSub(arr, start) {
  if (arr[start] === arr[start + 1]) return [1, start + 1];
  let i = start;
  let j = start + 1;
  let first = arr[i];
  let second = arr[j];
  let length = 1;
  while (i < arr.length && j < arr.length) {
    if ((j - i) % 2 === 1 && arr[j] === second) {
      j++;
      length++;
    } else if ((j - i) % 2 === 0 && arr[j] === first) {
      j++;
      length++;
    } else {
      return [length, j - 1];
    }
  }
  return [length, j - 1];
}

console.log(cityStreetLights([3, 3, 1, 2, 1, 2, 1, 3, 3]));
