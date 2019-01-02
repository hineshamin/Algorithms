// Returns true if there is a cycle in the graph
function hasDeadlock(connections, i = 0, num = 0) {
  if (num > connections.length) return true;
  for (let connect of connections[i]) {
    if (hasDeadlock(connections, connect, num + 1)) return true;
  }
  return false;
}
