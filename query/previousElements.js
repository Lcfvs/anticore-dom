import filter from 'anticore-core/Array/filter'
import isElement from '../info/isElement'
import previousNodes from './previousNodes'

export default function previousElements (node) {
  return filter(previousNodes(node), isElement)
}
