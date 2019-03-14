import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'

const window = global()
const method = window.Element.prototype.appendChild

export default function append (node, parentNode) {
  call(method, parentNode, node)

  return node
}
