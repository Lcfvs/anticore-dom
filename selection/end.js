import lastOrSelf from '../query/lastOfSelf'
import text from '../tree/text'
import select from './select'

export default function end (node) {
  let last = lastOrSelf(node)

  select(last, text(last).length)

  return last
}
