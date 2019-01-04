//Implement a function to check if a binary tree is balanced.
//For the purposes of this question a balanced tree is defined
//to be a tree such that the heights of the two subtrees of any
//node never differ by more than one

const {
  Node,
  Tree
} = require('../../Algorithms For Class/trees/binarytreeimplementation');

function checkBalanced(tree) {
  let minDepth;
  let maxDepth;
  function helper(node, currDepth = 0) {
    if (!node.left && !node.right) {
      if (!minDepth) minDepth = currDepth;
      if (!maxDepth) maxDepth = currDepth;
      minDepth = Math.min(minDepth, currDepth);
      maxDepth = Math.max(maxDepth, currDepth);
      if (maxDepth - minDepth > 1) return false;
      return true;
    }
    if (node.left && !helper(node.left, currDepth + 1)) return false;
    if (node.right && !helper(node.right, currDepth + 1)) return false;
    return true;
  }
  return helper(tree.root);
}

//Make a binary tree
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;
n6.left = n7;
n7.right = n8;

let t = new Tree(n1);

console.log(checkBalanced(t));
