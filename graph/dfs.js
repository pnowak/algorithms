const {
  Stack,
  Graph
} from ('@thejameskyle/itsy-bitsy-data-structures/itsy-bitsy-data-structures');

export function dfs(startNode, graph, stack = new Stack(), visited = []) {
  if (!stack.list.includes(startNode) && !visited.includes(startNode)) {
    stack.push(startNode);
    visited.push(startNode);
  }

  let check = stack.peek();
  let node = graph.find(check);
  let next;

  if (node.lines.length, next = node.lines.shift(), next !== void 0) {
    return dfs(next.value, graph, stack, visited);

  } else {
    stack.pop();

    if (stack.list.length) {
      next = stack.peek();

      return dfs(next, graph, stack, visited);

    } else {
      return visited;
    }
  }
}
