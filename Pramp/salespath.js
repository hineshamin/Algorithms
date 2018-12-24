//Given a node rootNode, write a function getCheapestCost
//that calculates the minimal Sales Path cost in the tree.
//lowest cost from root to node
function getCheapestCost(rootNode) {
  let minSum = Infinity;

  function traverse(rootNode, sum = 0) {
    sum += rootNode.cost;

    if (rootNode.children.length === 0) {
      if (sum < minSum) minSum = sum;
    }

    for (let child of rootNode.children) {
      traverse(child, sum);
    }
  }

  traverse(rootNode);

  return minSum;
}
