import isElementContainer from '../info/isElementContainer'

export default function elements (node) {
  if (!isElementContainer(node)) {
    return node.children
  }

  return null
}
