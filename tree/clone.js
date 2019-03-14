import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'

const window = global()
const method = window.Element.prototype.cloneNode

export default function clone (node, deep) {
  return call(method, node, deep)
}
