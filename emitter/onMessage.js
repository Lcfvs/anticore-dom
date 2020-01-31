import on from './on.js'

export default function onMessage (target, listener, options) {
  return on('message', target, listener, options)
}
