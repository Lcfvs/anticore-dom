import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'

const method = Element.cloneNode

export default function clone (node, deep) {
  return call(method, node, deep)
}
