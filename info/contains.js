import call from 'anticore-core/Function/call.js'
import Node from '../prototypes/Node.js'
import isNode from './isNode.js'

const method = Node.contains

export default function contains (node, value) {
  if (isNode(node)) {
    return call(method, node, value)
  }
}
