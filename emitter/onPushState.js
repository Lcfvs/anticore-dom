import on from './on.js'

export default function onPushState (target, listener, options) {
  return on('popstate', target, listener, options)
}
