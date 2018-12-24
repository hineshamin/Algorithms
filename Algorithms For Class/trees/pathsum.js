const { Tree, Node } = require('./binarytreeimplementation');
//https://leetcode.com/problems/path-sum-ii/
//This algorithm will find all the paths where the sum is equal to the target sum

//Make a binary tree
let n1 = new Node(5);
let n2 = new Node(4);
let n3 = new Node(8);
let n4 = new Node(11);
let n5 = new Node(13);
let n6 = new Node(4);
let n7 = new Node(7);
let n8 = new Node(2);
let n9 = new Node(5);
let n10 = new Node(1);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n4.left = n7;
n4.right = n8;
n3.left = n5;
n3.right = n6;
n6.left = n9;
n6.right = n10;

let t = new Tree(n1);

function pathSum(root, sum) {
  let paths = [];

  function dfs(currNode, currSum = 0, currPath = []) {
    if (currNode === null) return;
    if (currNode.left === null && currNode.right === null) {
      if (currSum + currNode.value === sum)
        paths.push([...currPath, currNode.value]);
      return;
    }
    dfs(currNode.left, currSum + currNode.value, [...currPath, currNode.value]);
    dfs(currNode.right, currSum + currNode.value, [
      ...currPath,
      currNode.value
    ]);
  }

  dfs(root);

  return paths;
}

pathSum(n1, 22);
