import nextNode from '../query/nextNode.js'
import parent from '../query/parent.js'
import before from './before.js'

export default function after (node, refNode) {
  return before(node, nextNode(refNode), parent(refNode))
}
