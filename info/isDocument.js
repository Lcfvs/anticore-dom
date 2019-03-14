import global from 'anticore-core/global'
import isInstanceOf from 'anticore-core/Object/isInstanceOf'

const window = global()
const constructor = window.Document

export default function isDocument (node) {
  return isInstanceOf(constructor, node)
}
