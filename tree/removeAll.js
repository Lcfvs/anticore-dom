import forEach from 'anticore-core/Array/forEach'
import slice from 'anticore-core/Array/slice'
import remove from './remove'

export default function removeAll (nodes) {
  forEach(slice(nodes, 0), remove)

  return nodes
}
