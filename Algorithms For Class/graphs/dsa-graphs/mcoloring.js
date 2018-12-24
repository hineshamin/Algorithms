const { Graph, Node } = require('./graph');
//For a given graph and number of colors m, can you color the vertices
//Such that no adjacent vertices have the same color

function possibleColors(g, m) {
  let numVert = g.nodes.size;
  if (numVert <= m) return true;
  function assign(c, nodes, numColorsAssigned = 0, colorsAssigned = new Map()) {
    let currNode = nodes[c];
    if (numColorsAssigned === numVert) return true;
    for (let i = 1; i <= m; i++) {
      let colorGood = true;
      for (let adj of currNode.adjacent) {
        if (colorsAssigned.get(adj) === i) {
          colorGood = false;
        }
      }
      if (colorGood) {
        colorsAssigned.set(currNode, i);
        if (assign(c + 1, nodes, numColorsAssigned + 1, colorsAssigned)) {
          return true;
        }
        colorsAssigned.delete(currNode);
      }
    }
    return false;
  }
  return assign(0, [...g.nodes]);
}

let graph = new Graph();
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
graph.addVertex(n1);
graph.addVertex(n2);
graph.addVertex(n3);
graph.addVertex(n4);
graph.addEdge(n1, n2);
graph.addEdge(n2, n3);
graph.addEdge(n3, n4);
graph.addEdge(n4, n1);
graph.addEdge(n1, n3);

console.log(possibleColors(graph, 4));
