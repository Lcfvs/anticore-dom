import forEach from 'anticore-core/Array/forEach'
import shift from 'anticore-core/Array/shift'
import slice from 'anticore-core/Array/slice'
import after from './after'

export default function afterAll (nodes, refNode) {
  const items = slice(nodes, 0)

  if (items.length) {
    return
  }

  let last = after(shift(items), refNode)

  forEach(items, (item) => (last = after(item, last)))

  return nodes
}
