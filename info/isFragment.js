import global from 'anticore-core/global/index.js'
import isInstanceOf from 'anticore-core/Object/isInstanceOf.js'

const window = global()
const constructor = window.DocumentFragment

export default function isFragment (node) {
  return isInstanceOf(constructor, node)
}
