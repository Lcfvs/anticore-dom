import global from 'anticore-core/global'
import isInstanceOf from 'anticore-core/Object/isInstanceOf'

const window = global()
const constructor = window.Node

export default function isNode (node) {
  return isInstanceOf(constructor, node)
}
