//https://leetcode.com/problems/the-skyline-problem/
function getSkyline(buildings) {
  if (buildings.length === 0) return [];
  let currBuildings = [0];
  let lastBuilding = 0;
  let maxHeights = [];
  let final = [];
  for (
    let i = buildings[0][0];
    i <= Math.max(...buildings.map(x => x[1]));
    i++
  ) {
    if (buildings[lastBuilding + 1] && buildings[lastBuilding + 1][0] === i) {
      currBuildings.push(lastBuilding + 1);
      lastBuilding++;
    }
    currBuildings = currBuildings.filter(x => buildings[x][1] >= i);
    maxHeights[i] = Math.max(...currBuildings.map(x => buildings[x][2]));
  }
  maxHeights = maxHeights.map(x => Math.max(x, 0));

  for (let i = 1; i < maxHeights.length; i++) {
    if (
      maxHeights[i] > maxHeights[i - 1] ||
      (maxHeights[i] && !maxHeights[i - 1])
    ) {
      final.push([i, maxHeights[i]]);
    } else if (maxHeights[i] < maxHeights[i - 1]) {
      final.push([i - 1, maxHeights[i]]);
    }
  }
  final.push([Math.max(...buildings.map(x => x[1])), 0]);
  if (maxHeights[0]) final.unshift([0, maxHeights[0]]);
  return final;
}

let buildings = [[0, 2147483647, 2147483647]];
