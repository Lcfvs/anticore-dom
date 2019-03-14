import isElementContainer from '../info/isElementContainer'

export default function firstElement (node) {
  if (isElementContainer(node)) {
    return node.firstElementChild || null
  }

  return null
}
