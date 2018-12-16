// https://www.codewars.com/kata/576986639772456f6f00030c

//Using TinyQueue from https://github.com/mourner/tinyqueue as JS does not support heaps out of the box
class TinyQueue {
  constructor(data = [], compare = defaultCompare) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
  }

  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }

  pop() {
    if (this.length === 0) return undefined;

    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;

    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }

    return top;
  }

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const { data, compare } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const { data, compare } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}

function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

//Main function to return the shortest path distance
function pathFinder(area) {
  let arr = createArr(area);
  return shortestPath(arr);
}

//Create an arr of integers from the given string graph
function createArr(area) {
  let newArr = [];
  let arr = area.split('\n');
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split(''));
  }
  return convArrToInt(newArr);
}

//Helper function to convert the arr of strings to integers
function convArrToInt(arr) {
  return arr.map(x => x.map(y => parseInt(y)));
}

//Use Dijkstras algorithm to find the shortest path
function shortestPath(
  arr,
  s = '0,0',
  e = `${arr.length - 1},${arr.length - 1}`
) {
  let explored = {};
  explored[s] = 0;
  let h = new TinyQueue([[0, s]], function(a, b) {
    return a[0] - b[0];
  });
  while (h.length > 0) {
    let point = h.pop();
    let dist = point[0];
    let startVert = point[1];
    if (startVert == e) {
      return dist;
    }
    let connectingVerts = getConnectingVerts(arr, startVert);
    for (let i = 0; i < connectingVerts.length; i++) {
      let endVert = connectingVerts[i];
      let startRow = parseInt(startVert.split(',')[0]);
      let startCol = parseInt(startVert.split(',')[1]);
      let endRow = parseInt(endVert.split(',')[0]);
      let endCol = parseInt(endVert.split(',')[1]);
      let greedyScore =
        explored[startVert] +
        Math.abs(arr[startRow][startCol] - arr[endRow][endCol]);
      if (
        (!explored[endVert] && explored[endVert] !== 0) ||
        greedyScore < explored[endVert]
      ) {
        explored[endVert] = greedyScore;
        h.push([greedyScore, endVert]);
      }
    }
  }
  return explored;
}

//Helper function to get the valid connecting verts to the point given
function getConnectingVerts(arr, point) {
  let connectingVerts = [];
  let i = parseInt(point.split(',')[0]);
  let j = parseInt(point.split(',')[1]);
  if (i + 1 < arr.length) {
    connectingVerts.push(`${i + 1},${j}`);
  }
  if (i - 1 >= 0) {
    connectingVerts.push(`${i - 1},${j}`);
  }
  if (j + 1 < arr.length) {
    connectingVerts.push(`${i},${j + 1}`);
  }
  if (j - 1 >= 0) {
    connectingVerts.push(`${i},${j - 1}`);
  }
  return connectingVerts;
}
