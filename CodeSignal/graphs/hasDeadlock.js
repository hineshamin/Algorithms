// Returns true if there is a cycle in the graph
function hasDeadlock(connections, i = 0, num = 0) {
  if (num > connections.length) return true;
  for (let connect of connections[i]) {
    if (hasDeadlock(connections, connect, num + 1)) return true;
  }
  return false;
}

let connections = [[1, 2, 3], [2, 3], [3], []];
// let connections = [[1], [2], [3, 4], [4], [0]];
console.log(hasDeadlock(connections));
