import on from './on.js'

export default function onFocus (target, listener, options) {
  return on('focus', target, listener, options)
}
