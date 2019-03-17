import indexOf from 'anticore-core/Array/indexOf'
import slice from 'anticore-core/Array/slice'
import nodes from './nodes'
import parent from './parent'

export default function previousNodes (node) {
  let siblings = nodes(parent(node))

  return slice(siblings, 0, indexOf(siblings, node))
}
