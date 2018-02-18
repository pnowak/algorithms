import Graph from ('@thejameskyle/itsy-bitsy-data-structures/itsy-bitsy-data-structures');
import findObjectByKey from 'helpers/helpers';

export class WeightedGraph extends Graph {
  addNode(value) {
    super.addNode(value);

    let obj = findObjectByKey(this.nodes, 'value', value);

    return Object.assign(obj, {
        cost: []
    });
  }

  addLine(startValue, endValue, cost) {
    super.addLine(startValue, endValue);

    let startNode = this.find(startValue);
    let endNode = this.find(endValue);

    startNode.cost.push([startValue, endValue, cost]);
    endNode.cost.push([startValue, endValue, cost]);
  }
}
