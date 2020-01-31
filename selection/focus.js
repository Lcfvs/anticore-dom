import call from 'anticore-core/Function/call.js'
import Element from '../prototypes/Element.js'
import current from './current.js'

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
