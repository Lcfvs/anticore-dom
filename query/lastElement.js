import isElementContainer from '../info/isElementContainer'

export default function lastElement (node) {
  if (isElementContainer(node)) {
    return node.lastElementChild || null
  }

  return null
}
