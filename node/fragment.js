import call from 'anticore-core/Function/call'
import isCollection from '../info/isCollection'
import append from '../tree/append'
import appendAll from '../tree/appendAll'
import document from './document'

const method = document().prototype.createDocumentFragment

export default function fragment (contents) {
  const node = call(method, document())

  if (!contents) {
    return node
  }

  if (isCollection(contents)) {
    return appendAll(contents, node)
  }

  return append(contents, node)
}
