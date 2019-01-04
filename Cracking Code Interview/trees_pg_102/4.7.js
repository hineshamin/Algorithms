//Given a list of projects and dependencies, determine an order
//that the projects can be done in

const {
  Graph,
  Node
} = require('../../Algorithms For Class/graphs/dsa-graphs/graph');

function sort(g) {
  let s = [];
  let visited = new Set();
  function util(node, partialVisited = new Set()) {
    visited.add(node);
    partialVisited.add(node);
    for (let adj of node.adjacent) {
      if (partialVisited.has(adj)) return false;
      if (!visited.has(adj)) {
        if (!util(adj, partialVisited)) return false;
      }
    }
    s.push(node.value);
    return true;
  }
  for (let v of g.nodes) {
    if (!visited.has(v)) {
      if (!util(v)) return false;
    }
  }
  return s;
}

let graph = new Graph();
let A = new Node('A');
let B = new Node('B');
let C = new Node('C');
let D = new Node('D');
let E = new Node('E');
let F = new Node('F');

graph.addVertices([A, B, C, D, E, F]);

graph.addEdgeDir(F, A);
graph.addEdgeDir(F, B);

graph.addEdgeDir(A, D);
graph.addEdgeDir(B, D);

graph.addEdgeDir(D, C);
// graph.addEdgeDir(C, B);

console.log(sort(graph));
