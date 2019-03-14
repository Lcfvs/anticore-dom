import empty from 'anticore-core/Object/empty'
import current from './current'

export const anchor = empty()

anchor.node = function () {
  return current().anchorNode
}

anchor.offset = function () {
  return current().anchorOffset
}
