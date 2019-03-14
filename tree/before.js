import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import parent from '../query/parent'
import append from './append'

const window = global()
const method = window.Element.prototype.insertBefore

export default function before (node, refNode, parentNode) {
  if (refNode) {
    call(method, parent(refNode), node, refNode)
  } else {
    append(node, parentNode)
  }

  return node
}
