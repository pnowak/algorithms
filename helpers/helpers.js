export function findObjectByKey(array, key, value) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index][key] === value) {
      return array[index];
    }
  }
  return null;
}

export function populateFromGraph(graph) {
  return graph.nodes.map((item) => {
    return item.value;
  });
}

export function init(startNode, graph) {
  const values = populateFromGraph(graph);

  return values.map((item) => {
    if (item === startNode) {
      return { value: item, cost: 0, prev: null };
    } else {
      return { value: item, cost: Infinity, prev: null };
    }
  });
}

export function removeItem(array, item) {
  const index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

export function smallestCost(array, visited) {
  let smallest = Infinity;
  let nextGraph;

  for (let index = 0; index < array.length; index += 1) {
    const item = array[index];

    if (item.cost <= smallest && !visited.includes(item.value)) {
      smallest = item.cost;
      nextGraph = item;
    }
  }

  return nextGraph;
}

/**
 * Swaps two values in an array.
 * @param {int} firstIndex Index of first item to swap.
 * @param {int} secondIndex Index of second item to swap.
 */
export function swap(firstIndex, secondIndex) {
  return [secondIndex, firstIndex];
}
