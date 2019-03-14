import isElement from '../info/isElement'
import isFragment from '../info/isFragment'
import isElementContainer from './isElementContainer'
import isText from './isText'

export default function hasParent (node) {
  return (isElement(node) || isText(node) || isFragment(node)) &&
    isElementContainer(node.parentNode)
}
