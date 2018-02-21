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
        let findedCost = findObjectByKey(keepTrack, 'value', item.value);
        let newCost = node.cost[index][2];

        if (newCost < findedCost.cost) {
          findedCost.cost = newCost;
          findedCost.prev = node.value;
        }
      });
    }

    visited.push(node.value);
    removeItem(unvisited, node.value);
  }

  return keepTrack;
}
