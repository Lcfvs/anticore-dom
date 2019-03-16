import on from './on'

export default function onPushState (target, listener, options) {
  return on('popstate', target, listener, options)
}
