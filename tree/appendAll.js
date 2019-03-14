import forEach from 'anticore-core/Array/forEach'
import slice from 'anticore-core/Array/slice'
import append from './append'

function callback (node) {
  append(node, this)
}

export default function appendAll (nodes, parent) {
  forEach(slice(nodes, 0), callback, parent)

  return nodes
}
