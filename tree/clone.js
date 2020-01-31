import call from 'anticore-core/Function/call.js'
import Element from '../prototypes/Element.js'

const method = Element.cloneNode

export default function clone (node, deep) {
  return call(method, node, deep)
}
