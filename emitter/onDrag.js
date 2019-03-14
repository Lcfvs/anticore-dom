import on from './on'

export default function onDrag (target, listener, options) {
  return on('drag', target, listener, options)
}
