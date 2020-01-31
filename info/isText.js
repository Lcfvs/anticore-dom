import global from 'anticore-core/global/index.js'
import isInstanceOf from 'anticore-core/Object/isInstanceOf.js'

const window = global()
const constructor = window.Text

export default function isText (node) {
  return isInstanceOf(constructor, node)
}
