import WeightedGraph from 'dataStructures/weightedGraph';
import {
  populateFromGraph,
  removeItem,
  smallestCost,
  findObjectByKey
  init } from 'helpers/helpers';

export function dijkstra(startNode, weightedGraph) {
  const keepTrack = init(startNode, weightedGraph);
  const unvisited = populateFromGraph(weightedGraph);
  const visited = [];

  while (unvisited.length) {
    let smaller = smallestCost(keepTrack, visited);
    let node = weightedGraph.find(smaller.value);

    if (node.lines.length) {
      node.lines.forEach((item, index) => {
        let newCost = findObjectByKey(keepTrack, 'value', item.value);
        let findedCost = node.cost[index][2];

        if (newCost.cost > findedCost) {
          newCost.cost = findedCost;
          newCost.prev = node.value;
        }
      });
    }

    visited.push(node.value);
    removeItem(unvisited, node.value);
  }

  return keepTrack;
}
