import call from 'anticore-core/Function/call'
import Node from '../prototypes/Node'
import isNode from './isNode'

const method = Node.contains

export default function contains (node, value) {
  if (isNode(node)) {
    return call(method, node, value)
  }
}
