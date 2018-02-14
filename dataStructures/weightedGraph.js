const {
  Graph
} from ('@thejameskyle/itsy-bitsy-data-structures/itsy-bitsy-data-structures');

export class WeightedGraph extends Graph {
  addNode(value) {
    super.addNode(value);

    let obj = findObjectByKey(this.nodes, 'value', value);

    return Object.assign(obj, {
        cost: [value]
    });
  }

  addLine(startValue, endValue, cost) {
    super.addLine(startValue, endValue);

    let startNode = this.find(startValue);
    let endNode = this.find(endValue);

    startNode.cost.push(cost);
    endNode.cost.push(cost);
  }
}

function findObjectByKey(array, key, value) {
    for (let index = 0; index < array.length; index += 1) {
        if (array[index][key] === value) {
            return array[index];
        }
    }
    return null;
}
