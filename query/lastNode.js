import isElementContainer from '../info/isElementContainer'

export default function lastNode (node) {
  if (isElementContainer(node)) {
    return node.lastChild || null
  }

  return null
}
