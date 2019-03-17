import filter from 'anticore-core/Array/filter'
import isElement from '../info/isElement'
import nextNodes from './nextNodes'

export default function nextElements (node) {
  return filter(nextNodes(node), isElement)
}
