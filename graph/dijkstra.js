import { WeightedGraph } from './../dataStructures/weightedGraph';
import {
  populateFromGraph,
  removeItem,
  smallestCost,
  findObjectByKey,
  init } from './../helpers/helpers';

export default function dijkstra(startNode, weightedGraph) {
  const keepTrack = init(startNode, weightedGraph);
  const unvisited = populateFromGraph(weightedGraph);
  const visited = [];

  while (unvisited.length) {
    const smaller = smallestCost(keepTrack, visited);
    const node = WeightedGraph.find(smaller.value);

    if (node.lines.length) {
      node.lines.forEach((item, index) => {
        const findedCost = findObjectByKey(keepTrack, 'value', item.value);
        const newCost = node.cost[index][2];

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
