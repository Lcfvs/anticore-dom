import indexOf from 'anticore-core/array/indexOf'
import slice from 'anticore-core/array/slice'
import nodes from './nodes'
import parent from './parent'

export default function previousNodes (node) {
  let siblings = nodes(parent(node))

  return slice(siblings, 0, indexOf(siblings, node))
}
