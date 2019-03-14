import on from './on'

export default function onKeyUp (target, listener, options) {
  return on('keyup', target, listener, options)
}
