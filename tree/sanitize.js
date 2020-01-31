import forEach from 'anticore-core/Array/forEach.js'
import substring from 'anticore-core/String/substring.js'
import toLowerCase from 'anticore-core/String/toLowerCase.js'
import isElement from '../info/isElement.js'
import elements from '../query/elements.js'
import attr from './attr.js'

function forget (attribute) {
  if (toLowerCase(substring(attribute.name, 0, 2)) === 'on') {
    attr(attribute.ownerElement, attribute.name, null)
  }
}

export default function sanitize (node) {
  if (isElement(node) && node.attributes) {
    forEach(node.attributes, forget)
    forEach(elements(node), sanitize)
  }

  return node
}
