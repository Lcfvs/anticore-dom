import isBoolean from 'anticore-core/Boolean/isBoolean'
import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import isNumber from 'anticore-core/Number/isNumber'
import isString from 'anticore-core/String/isString'
import text from '../node/text'
import current from './current'

const window = global()
const Range = window.Range.prototype
const Selection = window.Selection.prototype
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
