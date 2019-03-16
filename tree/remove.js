import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'
import parent from '../query/parent'

const method = Element.removeChild

export default function remove (node) {
  if (parent(node)) {
    call(method, parent(node), node)
  }

  return node
}
