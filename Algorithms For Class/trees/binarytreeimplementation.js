const { Queue } = require('../stacks-queues/implementation');

//Node class for a binary tree
class NodeB {
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
}

//Class for binary tree
class BTree {
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
}

//Make a binary tree
let nb1 = new NodeB(1);
let nb2 = new NodeB(2);
let nb3 = new NodeB(3);
let nb4 = new NodeB(4);
let nb5 = new NodeB(5);
let nb6 = new NodeB(6);
let nb7 = new NodeB(7);

nb1.left = nb2;
nb1.right = nb3;
nb2.left = nb4;
nb2.right = nb5;
nb3.right = nb6;
nb6.left = nb7;

let tB = new BTree(nb1);
