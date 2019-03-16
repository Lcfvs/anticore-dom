import call from 'anticore-core/Function/call'
import Element from '../prototypes/Element'
import isElement from './isElement'

const method = Element.getBoundingClientRect

export default function boundingRect (element) {
  if (isElement(element)) {
    return call(method, element)
  }
}
