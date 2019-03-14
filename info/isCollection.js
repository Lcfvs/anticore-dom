import global from 'anticore-core/global'
import isInstanceOf from 'anticore-core/Object/isInstanceOf'

const window = global()
const HTMLCollection = window.HTMLCollection
const NodeList = window.NodeList

export default function isCollection (contents) {
  return isInstanceOf(HTMLCollection, contents) ||
    isInstanceOf(NodeList, contents)
}
