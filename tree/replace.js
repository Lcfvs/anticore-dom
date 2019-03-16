import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'
import parent from '../query/parent'

const method = Element.replaceChild

export default function replace (node, refNode) {
  call(method, parent(refNode), node, refNode)

  return node
}
