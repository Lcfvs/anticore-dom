import includes from 'anticore-core/Array/includes'
import bind from 'anticore-core/Function/bind'
import call from 'anticore-core/Function/call'
import curry from 'anticore-core/Function/curry'
import empty from 'anticore-core/Object/empty'
import concat from 'anticore-core/String/concat'
import Element from '../prototypes/Element'

const listen = Element.addEventListener
const forget = Element.removeEventListener
const events = empty()

events.blur = ['blur', 'touchcancel', 'touchleave']
events.blur.listener = function (listener, event) {
  return call(listener, this, event)
}

events.click = ['click', 'touchend']
events.click.listener = function (listener, event) {
  if (!event.touches || event.touches.length === 1) {
    return call(listener, this, event)
  }
}

events.focus = ['focus', 'touchstart']
events.focus.listener = events.blur.listener

function register (method, event, target, listener, options) {
  if (concat('on', event) in target) {
    call(method, target, event, listener, options)
  }
}

function each (method, event, target, listener, options) {
  if (event in events) {
    const names = events[event]
    const length = names.length

    listener = bind(names.listener, target, listener)

    for (let key = 0; key < length; key += 1) {
      register(method, names[key], target, listener, options)
    }
  } else {
    register(method, event, target, listener, options)
  }

  if (method === listen) {
    return curry(each, forget, event, target, listener, options)
  }
}

function matching (target, listener, options, event) {
  const {ctrl, alt, shift, keys, code} = options

  if (!event.ctrlKey !== !ctrl) {
    return
  }

  if (!event.altKey !== !alt) {
    return
  }

  if (!event.shiftKey !== !shift) {
    return
  }

  if (keys && !includes(keys, event.key)) {
    return
  }

  if (code && (event.which !== code || event.keyCode === code)) {
    return
  }

  return call(listener, target, event)
}

export default function on (event, target, listener, options) {
  const config = empty(options || empty())
  const {capture, once, passive} = config
  const callback = curry(matching, target, listener, config)

  return each(listen, event, target, callback, empty({
    capture,
    once,
    passive
  }))
}
