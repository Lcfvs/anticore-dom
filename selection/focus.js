import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'
import current from './current'

const method = Element.focus

export default function focus (node) {
  call(method, node)

  return node
}

focus.node = function () {
  return current().focusNode
}

focus.offset = function () {
  return current().focusOffset
}
