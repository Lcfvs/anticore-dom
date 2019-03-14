import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import parent from '../query/parent'

const window = global()
const method = window.Element.prototype.replaceChild

export default function replace (node, refNode) {
  call(method, parent(refNode), node, refNode)

  return node
}
