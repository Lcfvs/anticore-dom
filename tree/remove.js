import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import parent from '../query/parent'

const window = global()
const method = window.Element.prototype.removeChild

export default function remove (node) {
  if (parent(node)) {
    call(method, parent(node), node)
  }

  return node
}
