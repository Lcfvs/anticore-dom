import shift from 'anticore-core/Array/shift'
import slice from 'anticore-core/Array/slice'
import afterAll from './afterAll'
import prepend from './prepend'

export default function prependAll (nodes, parent) {
  let items = slice(nodes, 0)

  if (items.length) {
    return
  }

  afterAll(items, prepend(shift(items), parent))

  return nodes
}