const { Queue } = require('../stacks-queues/implementation');

//Node class for a nary tree
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  //Sums all the nodes in the tree
  sumAll() {
    let sum = 0;
    function bfs(s) {
      let q = new Queue();
      q.enqueue(s);
      while (q.length) {
        let n = q.dequeue();
        sum += n.value;
        for (let child of n.children) {
          q.enqueue(child);
        }
      }
    }
    bfs(this);
    return sum;
  }

  //Count the number of even numbers in the tree
  countEvens() {
    let count = 0;
    function bfs(s) {
      let q = new Queue();
      q.enqueue(s);
      while (q.length) {
        let n = q.dequeue();
        if (n.value % 2 === 0) count++;
        for (let child of n.children) {
          q.enqueue(child);
        }
      }
    }
    bfs(this);
    return count;
  }

  //Calculates the minimum depth of the tree
  minDepth() {
    let minDepth = Infinity;
    function dfs(s, depth = 0) {
      if (!s.children.length) {
        if (depth < minDepth) minDepth = depth;
        return;
      }
      for (let child of s.children) {
        dfs(child, depth + 1);
      }
    }
    dfs(this);
    return minDepth;
  }

  //Calculates the max depth of the tree
  maxDepth() {
    let maxDepth = 0;
    function dfs(s, depth = 0) {
      if (!s.children.length) {
        if (depth > maxDepth) maxDepth = depth;
        return;
      }
      for (let child of s.children) {
        dfs(child, depth + 1);
      }
    }
    dfs(this);
    return maxDepth;
  }

  //Finds the number of values greater than the input
  numGreater(x) {
    let count = 0;
    function dfs(s) {
      if (s.value > x) count++;
      if (!s.children.length) {
        return;
      }
      for (let child of s.children) {
        dfs(child);
      }
    }
    dfs(this);
    return count;
  }
}

//Class for a tree
class Tree {
  constructor(root = null) {
    this.root = root;
  }

  //Sums all the values in the tree
  sumAll() {
    return this.root.sumAll();
  }

  //Counts all the even numbers in the tree
  countEvens() {
    return this.root.countEvens();
  }

  //Calculates the min depth of the tree
  minDepth() {
    return this.root.minDepth();
  }

  //Calculates the max depth of the tree
  maxDepth() {
    return this.root.maxDepth();
  }

  //Calculates the number of values greater than the input
  numGreater(x) {
    return this.root.numGreater(x);
  }
}

//Make a n-ary tree
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);

n1.children = [n2, n3, n4];
n2.children = [n5, n6];
n4.children = [n7];

let t = new Tree(n1);
