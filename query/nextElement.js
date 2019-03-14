import hasParent from '../info/hasParent'

export default function nextElement (node) {
  if (hasParent(node)) {
    return node.nextElementSibling || null
  }

  return null
}
