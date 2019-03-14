import global from 'anticore-core/global'
import isInstanceOf from 'anticore-core/Object/isInstanceOf'

const window = global()
const constructor = window.Element

export default function isElement (node) {
  return isInstanceOf(constructor, node)
}
