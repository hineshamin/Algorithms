//Given a sorted(increasing order) array with unique integer
//elements, write an algorithm to create a binary
//search tree with minimal height

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function minTree(arr) {
  function tree(s, e) {
    if (s === e) return new Node(arr[s]);
    let m = findMid(s, e);
    let n = new Node(arr[m]);
    n.right = tree(m + 1, e);
    n.left = tree(s, m - 1);
    return n;
  }
  return tree(0, arr.length - 1);
}

function findMid(s, e) {
  return Math.floor((s + e) / 2);
}
