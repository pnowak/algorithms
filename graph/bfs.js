const {
  Queue,
  Graph
} from ('@thejameskyle/itsy-bitsy-data-structures/itsy-bitsy-data-structures');

export function bfs(graph, startNode) {
  const visited = [];
  const queue = new Queue();

  queue.enqueue(startNode);

  while (queue.length) {
    let check = queue.dequeue();
    let value = typeof check === 'string' ? check : check.value;
    let node = graph.find(value);

    if (!visited.includes(node.value)) {
      if (node.lines.length) {
        node.lines.forEach((item) => {
          queue.enqueue(item);
        });
      }

      visited.push(node.value);
    }
  }

  return visited;
}
