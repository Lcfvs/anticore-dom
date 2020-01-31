import on from './on.js'

export default function onInput (target, listener, options) {
  return on('input', target, listener, options)
}
