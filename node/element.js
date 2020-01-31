import call from 'anticore-core/Function/call.js'
import Document from '../prototypes/Document.js'
import document from './document.js'

const method = Document.createElement
const methodNS = Document.createElementNS

export default function element (tag, ns = null) {
  if (ns === null) {
    return call(method, document(), tag)
  }

  return call(methodNS, ns, document(), tag)
}
