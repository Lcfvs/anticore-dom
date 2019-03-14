import isElementContainer from '../info/isElementContainer'

export default function firstNode (node) {
  if (isElementContainer(node)) {
    return node.firstChild || null
  }

  return null
}
