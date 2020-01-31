import on from './on.js'

export default function onKeyUp (target, listener, options) {
  return on('keyup', target, listener, options)
}
