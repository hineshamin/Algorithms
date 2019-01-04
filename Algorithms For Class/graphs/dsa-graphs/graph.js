const { Queue } = require('../../stacks-queues/implementation');

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach(v => this.nodes.add(v));
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  addEdgeDir(v1, v2) {
    v1.adjacent.add(v2);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.forEach(v => v.adjacent.delete(vertex));
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let arr = [];
    let visited = new Set();
    function helper(currNode) {
      visited.add(currNode);
      arr.push(currNode.value);
      currNode.adjacent.forEach(adj => {
        if (!visited.has(adj)) helper(adj);
      });
    }
    helper(start);
    return arr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let visited = new Set([start]);
    let arr = [];
    let q = new Queue();
    q.enqueue(start);
    while (q.length) {
      let currNode = q.dequeue();
      arr.push(currNode.value);
      visited.add(currNode);
      currNode.adjacent.forEach(adj => {
        if (!visited.has(adj)) {
          q.enqueue(adj);
          visited.add(adj);
        }
      });
    }
    return arr;
  }

  //This function finds the shortest path between 2 vertices using bfs
  shortestPath(v1, v2) {
    let visited = new Set([v1]);
    let q = new Queue();
    q.enqueue([v1, 0]);
    while (q.length) {
      let currNode = q.dequeue();
      if (currNode[0] === v2) return currNode[1];
      visited.add(currNode);
      currNode[0].adjacent.forEach(adj => {
        if (!visited.has(adj)) {
          q.enqueue([adj, currNode[1] + 1]);
          visited.add(adj);
        }
      });
    }
  }

  //This function finds the shortest path between 2 vertices using bidirectional bfs
  shortestPathBi(v1, v2) {
    let visited1 = new Map([[v1, 0]]);
    let visited2 = new Map([[v2, 0]]);
    let q1 = new Queue();
    let q2 = new Queue();
    q1.enqueue([v1, 0]);
    q2.enqueue([v2, 0]);
    let foundVal;
    while (q1.length && q2.length) {
      let currNode1 = q1.dequeue();
      visited1.set(currNode1[0], currNode1[1]);
      currNode1[0].adjacent.forEach(adj => {
        if (!visited1.has(adj)) {
          q1.enqueue([adj, currNode1[1] + 1]);
          visited1.set(adj, currNode1[1] + 1);
        }
      });
      let currNode2 = q2.dequeue();
      visited2.set(currNode2[0], currNode2[1]);
      currNode2[0].adjacent.forEach(adj => {
        if (visited1.has(adj)) {
          foundVal = visited1.get(adj) + currNode2[1] + 1;
        }
        if (!visited2.has(adj)) {
          q2.enqueue([adj, currNode2[1] + 1]);
          visited2.set(adj, currNode2[1] + 1);
        }
      });
      return foundVal;
    }
    return 'No Path Found';
  }
}

let graph = new Graph();
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph.addVertices([S, P, U, X, Q, Y, V, R, W, T]);

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);

module.exports = { Graph, Node };
