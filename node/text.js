import call from 'anticore-core/Function/call.js'
import Document from '../prototypes/Document.js'
import document from './document.js'

const method = Document.createTextNode

export default function text (value) {
  return call(method, document(), value)
}
