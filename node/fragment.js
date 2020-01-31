import call from 'anticore-core/Function/call.js'
import isCollection from '../info/isCollection.js'
import append from '../tree/append.js'
import appendAll from '../tree/appendAll.js'
import Document from '../prototypes/Document.js'
import document from './document.js'

const method = Document.createDocumentFragment

export default function fragment (contents) {
  const node = call(method, document())

  if (!contents) {
    return node
  }

  if (isCollection(contents)) {
    appendAll(contents, node)
  } else {
    append(contents, node)
  }

  return node
}
