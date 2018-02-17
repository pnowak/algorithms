export function findObjectByKey(array, key, value) {
    for (let index = 0; index < array.length; index += 1) {
        if (array[index][key] === value) {
            return array[index];
        }
    }
    return null;
}

export function populateFromGraph(weightedGraph) {
  return listNode = weightedGraph.nodes.forEach((item) => {
    return { item.value };
  });
}
