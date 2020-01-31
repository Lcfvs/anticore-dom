import isBoolean from 'anticore-core/Boolean/isBoolean.js'
import call from 'anticore-core/Function/call.js'
import isNumber from 'anticore-core/Number/isNumber.js'
import isString from 'anticore-core/String/isString.js'
import Range from '../prototypes/Range.js'
import Selection from '../prototypes/Selection.js'
import text from '../node/text.js'
import current from './current.js'

const deleteContents = Range.deleteContents
const insertNode = Range.insertNode
const collapseToEnd = Selection.collapseToEnd
const getRangeAt = Selection.getRangeAt

export default function insert (node) {
  const selection = current()
  const range = call(getRangeAt, selection, 0)

  if (isString(node) || isNumber(node) || isBoolean(node)) {
    node = text(node)
  }

  call(deleteContents, range)
  call(insertNode, range, node)
  call(collapseToEnd, selection)

  return selection
}
