import global from 'anticore-core/global'
import isInstanceOf from 'anticore-core/Object/isInstanceOf'

const window = global()
const constructor = window.DocumentFragment

export default function isFragment (node) {
  return isInstanceOf(constructor, node)
}
