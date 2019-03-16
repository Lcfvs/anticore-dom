import call from 'anticore-core/Function/call'
import isInteger from 'anticore-core/Number/isInteger'
import Document from '../prototypes/Document'
import Range from '../prototypes/Range'
import Selection from '../prototypes/Selection'
import document from '../node/document'
import current from './current'

const createRange = Document.createRange
const selectNodeContents = Range.selectNodeContents
const setStart = Range.setStart
const setEnd = Range.setEnd
const removeAllRanges = Selection.removeAllRanges
const addRange = Selection.addRange
const collapseToEnd = Selection.collapseToEnd
const collapseToStart = Selection.collapseToStart

export default function select (node, begin, end) {
  const range = call(createRange, document())
  const selection = current()

  call(selectNodeContents, range, node)

  if (isInteger(begin)) {
    call(setStart, range, node, begin)
  }

  if (isInteger(end)) {
    call(setEnd, range, node, end)
  }

  call(removeAllRanges, selection)
  call(addRange, selection, range)

  if (!isInteger(begin)) {
    call(collapseToEnd, selection)
  }

  if (!isInteger(end)) {
    call(collapseToStart, selection)
  }

  return node
}
