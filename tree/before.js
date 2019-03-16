import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'
import parent from '../query/parent'
import append from './append'

const method = Element.insertBefore

export default function before (node, refNode, parentNode) {
  if (refNode) {
    call(method, parent(refNode), node, refNode)
  } else {
    append(node, parentNode)
  }

  return node
}
