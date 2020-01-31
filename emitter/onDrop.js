import on from './on.js'

export default function onDrop (target, listener, options) {
  return on('drop', target, listener, options)
}
