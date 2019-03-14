import bind from 'anticore-core/Function/bind'
import call from 'anticore-core/Function/call'
import empty from 'anticore-core/Object/empty'
import nodeName from '../info/nodeName'
import onChange from './onChange'
import onDrop from './onDrop'
import prevent from './prevent'

function trueListener (listener, event) {
  if (event.type === 'drop') {
    prevent(event)
  }

  call(listener, this, event)
}

export default function onFileInput (target, listener, options) {
  if (nodeName(target) === 'input' && target.type === 'file') {
    listener = bind(trueListener, target, listener)

    onChange(target, listener, options)
    onDrop(target, listener, options)

    return listener
  }
}
