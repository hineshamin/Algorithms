const { Queue } = require('../stacks-queues/implementation');

//Node class for a binary tree
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  //Finds the max sum of a path in binary tree
  maxSum() {
    let maxSum = -Infinity;
    function dfs(s, currSum = 0) {
      if (s === null) {
        if (currSum > maxSum) maxSum = currSum;
        return;
      } else {
        currSum += s.value;
      }
      dfs(s.left, currSum);
      dfs(s.right, currSum);
    }
    dfs(this);
    return maxSum;
  }

  //Finds the next largest number in a binary tree
  nextLarger(x) {
    let potCand = null;
    function dfs(s) {
      if (s === null) {
        return;
      } else {
        if (potCand === null && s.value > x) potCand = s.value;
        else if (s.value > x && s.value < potCand) potCand = s.value;
      }
      dfs(s.left);
      dfs(s.right);
    }
    dfs(this);
    return potCand;
  }

  //Return true if two nodes are cousins(same depth, different parent)
  areCousins(n1, n2) {
    let r1 = this._findDepthAndParent(n1);
    let r2 = this._findDepthAndParent(n2);
    return r1.depth === r2.depth && r1.parent !== r2.parent;
  }

  //Find the depth and parent of a node
  _findDepthAndParent(n) {
    let ret = {
      depth: null,
      parent: null
    };
    function dfs(s, n, currDepth = 0, parent = null) {
      if (s === null) {
        return;
      } else if (n === s) {
        ret.depth = currDepth;
        ret.parent = parent;
        return 'found';
      }
      if (dfs(s.left, n, currDepth + 1, s) === 'found') return 'found';
      if (dfs(s.right, n, currDepth + 1, s) === 'found') return 'found';
    }
    dfs(this, n);
    return ret;
  }

  //Serializes a tree into a string
  serialize() {
    let ser = [];
    function bfs(s) {
      let q = new Queue();
      q.enqueue(s);
      while (q.length) {
        let n = q.dequeue();
        if (n) {
          ser.push(n.value);
          q.enqueue(n.left);
          q.enqueue(n.right);
        } else if (n === null) {
          ser.push(null);
        }
      }
    }
    bfs(this);
    return ser;
  }

  //Find the longest path in the binary tree
  longestPath() {
    let longest = [];
    let currPath = [];
    function dfs(currNode) {
      if (!currNode) {
        if (currPath.length > longest.length) longest = [...currPath];
        return;
      }
      currPath.push(currNode.value);
      dfs(currNode.left);
      dfs(currNode.right);
      currPath.pop();
    }
    dfs(this);
    console.log(longest);
  }
}

//Class for binary tree
class Tree {
  constructor(root = null) {
    this.root = root;
  }

  //Find the max sum path in a binary tree
  maxSum() {
    return this.root.maxSum();
  }

  //Finds the next larger number in a binary tree
  nextLarger(x) {
    return this.root.nextLarger(x);
  }

  //Find out if the 2 nodes are cousins (same depth, different parent)
  areCousins(n1, n2) {
    return this.root.areCousins(n1, n2);
  }

  //Finds the longest path in a binary tree
  longestPath() {
    return this.root.longestPath();
  }
}

//Make a binary tree
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;
n6.left = n7;
let t = new Tree(n1);

console.log(t.longestPath());

module.exports = {
  Tree,
  Node
};
