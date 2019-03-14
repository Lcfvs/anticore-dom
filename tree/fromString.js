import element from '../node/element'
import fragment from '../node/fragment'
import nodes from '../query/nodes'
import html from '../tree/html'

export default function fromString (data) {
  return fragment(nodes(html(element('body'), data)))
}
