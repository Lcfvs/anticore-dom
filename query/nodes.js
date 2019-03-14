import isElementContainer from '../info/isElementContainer'

export default function nodes (node) {
  if (isElementContainer(node)) {
    return node.childNodes
  }

  return null
}
