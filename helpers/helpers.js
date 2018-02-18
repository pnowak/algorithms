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

export function smallestCost(array) {
  let smallest = Infinity;
  let nextGraph;

  for (let index = 0; index < array.length; index += 1) {
    let item = array[index];

    if (item.cost < smallest) {
      smallest = item.cost;
      nextGraph = item;
    }
  }

  return nextGraph;
}
