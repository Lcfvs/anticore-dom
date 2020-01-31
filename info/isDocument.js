import global from 'anticore-core/global/index.js'
import isInstanceOf from 'anticore-core/Object/isInstanceOf.js'

const window = global()
const constructor = window.Document

export default function isDocument (node) {
  return isInstanceOf(constructor, node)
}
