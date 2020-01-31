import on from './on.js'

export default function onDrag (target, listener, options) {
  return on('drag', target, listener, options)
}
