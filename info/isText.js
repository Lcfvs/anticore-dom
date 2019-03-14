import global from 'anticore-core/global'
import isInstanceOf from 'anticore-core/Object/isInstanceOf'

const window = global()
const constructor = window.Text

export default function isText (node) {
  return isInstanceOf(constructor, node)
}
