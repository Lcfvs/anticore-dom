import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import isNode from './isNode'

const window = global()
const method = window.Node.prototype.contains

export default function contains (node, value) {
  if (isNode(node)) {
    return call(method, node, value)
  }
}
