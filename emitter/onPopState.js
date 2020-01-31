import on from './on.js'

export default function onPopState (target, listener, options) {
  return on('popstate', target, listener, options)
}
