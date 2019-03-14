import filter from 'anticore-core/array/filter'
import isElement from '../info/isElement'
import nextNodes from './nextNodes'

export default function nextElements (node) {
  return filter(nextNodes(node), isElement)
}
