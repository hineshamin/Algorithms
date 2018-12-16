// https://www.codewars.com/kata/57cebf1472f98327760003cd
// This algorithm finds the number of triangles that can be formed by connected vertices of the same color
function countColTriang(pointsList) {
  let triObj = {};
  let result = {};
  let seen = {};
  for (let i = 0; i < pointsList.length; i++) {
    if (triObj[pointsList[i][1]]) {
      triObj[pointsList[i][1]].push(pointsList[i][0]);
    } else {
      triObj[pointsList[i][1]] = [pointsList[i][0]];
    }
    result[pointsList[i][1]] = 0;
    seen[pointsList[i][1]] = new Set([]);
  }
  for (let color in triObj) {
    for (let i = 0; i < triObj[color].length; i++) {
      for (let j = 0; j < triObj[color].length; j++) {
        for (let k = 0; k < triObj[color].length; k++) {
          let point1 = triObj[color][i];
          let point2 = triObj[color][j];
          let point3 = triObj[color][k];
          if (
            arePointsDifferent(point1, point2) &&
            arePointsDifferent(point1, point3) &&
            arePointsDifferent(point2, point3)
          ) {
            if (
              isValidTriangle(point1, point2, point3) &&
              !seen[color].has(pointsToSortedStr(i, j, k))
            ) {
              result[color] += 1;
              seen[color].add(pointsToSortedStr(i, j, k));
            }
          }
        }
      }
    }
  }
  let totalPoints = pointsList.length;
  let numOfColors = Object.keys(result).length;
  let numOfTriangles = Object.keys(result).reduce(
    (y, x) => parseInt(result[x]) + y,
    0
  );
  let max = 0;
  let maxKey = {};
  for (let key in result) {
    if (result[key] >= max) {
      max = result[key];
      maxKey[key] = max;
    }
  }
  let maxArr = [];
  for (let key in maxKey) {
    if (maxKey[key] === max) {
      maxArr.push(key);
    }
  }
  maxArr.sort();
  maxArr.push(max);
  if (max === 0) {
    return [totalPoints, numOfColors, numOfTriangles, []];
  }
  return [totalPoints, numOfColors, numOfTriangles, maxArr];
}

function arePointsDifferent(x, y) {
  return !(x[0] === y[0] && x[1] === y[1]);
}

function isValidTriangle(x, y, z) {
  return (
    Math.abs((y[0] - x[0]) * (z[1] - x[1]) - (y[1] - x[1]) * (z[0] - x[0])) !==
    0
  );
}

function pointsToSortedStr(i, j, k) {
  arr = [i, j, k];
  return JSON.stringify(arr.sort());
}
