import indexOf from 'anticore-core/Array/indexOf.js'
import parent from '../query/parent.js'
import start from './start.js'

export default function next (node, targets) {
  let key = indexOf(targets, node)

  node = targets[key += 1]

  while (node) {
    if (parent(node)) {
      return start(node)
    }

    node = targets[key += 1]
  }
}
