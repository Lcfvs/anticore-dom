import firstOrSelf from '../query/firstOfSelf'
import select from './select'

export default function start (node) {
  const first = firstOrSelf(node)

  select(first, 0)

  return first
}
