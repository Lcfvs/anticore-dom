import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'

const method = Element.appendChild

export default function append (node, parentNode) {
  call(method, parentNode, node)

  return node
}
