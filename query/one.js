import includes from 'anticore-core/Array/includes'
import call from 'anticore-core/Function/call'
import isElement from '../info/isElement'
import isElementContainer from '../info/isElementContainer'
import document from '../node/document'
import Document from '../prototypes/Document'
import Element from '../prototypes/Element'
import DocumentFragment from '../prototypes/DocumentFragment'

const methods = [
  Document.querySelector,
  Element.querySelector,
  DocumentFragment.querySelector
]

export default function one (selector, refNode) {
  if (!isElementContainer(refNode)) {
    refNode = document()
  }

  const method = refNode.querySelector

  if (includes(methods, method)) {
    return call(method, refNode, selector)
  }

  return null
}
