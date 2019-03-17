import indexOf from 'anticore-core/Array/indexOf'
import slice from 'anticore-core/Array/slice'
import nodes from './nodes'
import parent from './parent'

export default function nextNodes (node) {
  const siblings = nodes(parent(node))

  return slice(siblings, indexOf(siblings, node) + 1)
}
