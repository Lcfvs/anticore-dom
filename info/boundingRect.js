import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import isElement from './isElement'

const window = global()
const method = window.Element.prototype.getBoundingClientRect

export default function boundingRect (element) {
  if (isElement(element)) {
    return call(method, element)
  }
}
