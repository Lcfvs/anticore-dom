import isDocument from '../info/isDocument'
import isElement from '../info/isElement'
import isFragment from '../info/isFragment'

export default function isElementContainer (node) {
  return isElement(node) || isDocument(node) || isFragment(node)
}
