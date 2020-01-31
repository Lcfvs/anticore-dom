import on from './on.js'

export default function onError (target, listener, options) {
  return on('error', target, listener, options)
}
