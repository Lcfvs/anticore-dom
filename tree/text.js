import isUndefined from 'anticore-core/undefined/isUndefined.js'
import isElement from '../info/isElement.js'

export default function text (node, data) {
  if (isElement(node)) {
    if (!isUndefined(data)) {
      node.textContent = data
    }

    return node.textContent
  }

  if (!isUndefined(data)) {
    node.nodeValue = data
  }

  return node.nodeValue
}
