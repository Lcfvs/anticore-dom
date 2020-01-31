import call from 'anticore-core/Function/call.js'
import Element from '../prototypes/Element.js'

const method = Element.appendChild

export default function append (node, parentNode) {
  call(method, parentNode, node)

  return node
}
