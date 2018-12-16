//Route between node: given a directed graph, design an algorithm to find out whether there is a route between 2 nodes.
let { NodeG } = require('./Implementation');

let n1 = new NodeG(1);
let n2 = new NodeG(2);
let n3 = new NodeG(3);
let n4 = new NodeG(4);
let n5 = new NodeG(5);
let n6 = new NodeG(6);

n2.adjacent = [n1, n3];
n3.adjacent = [n4, n5];
n4.adjacent = [n1, n2];
n5.adjacent = [n6];

function dfsrecursive(root) {
  if (root !== null) {
    root.visited = true;
    console.log(root.value);
    if (root.adjacent) {
      for (let adj of root.adjacent) {
        if (adj.visited === false) dfsrecursive(adj);
      }
    }
  }
}

dfsrecursive(n4);
