import on from './on'

export default function onPopState (target, listener, options) {
  return on('popstate', target, listener, options)
}
