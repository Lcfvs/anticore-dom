import forEach from 'anticore-core/Array/forEach'
import slice from 'anticore-core/Array/slice'
import before from './before'

export default function beforeAll (nodes, refNode, parent) {
  forEach(slice(nodes, 0), (node) => before(node, refNode, parent))

  return nodes
}
