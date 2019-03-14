import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import current from './current'

const window = global()
const method = window.Element.prototype.focus

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
