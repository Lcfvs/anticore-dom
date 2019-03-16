import call from 'anticore-core/Function/call'
import isElementContainer from '../info/isElementContainer'
import document from '../node/document'
import Document from '../prototypes/Document'

const method = Document.querySelector

export default function one (selector, refNode) {
  if (!isElementContainer(refNode)) {
    refNode = document()
  }

  return call(method, refNode, selector)
}
