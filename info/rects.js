import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'
import isElement from './isElement'

const method = Element.getClientRect

export default function getClientRect (element) {
  if (isElement(element)) {
    return call(method, element)
  }
}
