import forEach from 'anticore-core/Array/forEach.js'
import slice from 'anticore-core/Array/slice.js'
import before from './before.js'

export default function beforeAll (nodes, refNode, parent) {
  forEach(slice(nodes, 0), (node) => before(node, refNode, parent))

  return nodes
}
