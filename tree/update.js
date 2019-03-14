import forEach from 'anticore-core/Array/forEach'
import isObject from 'anticore-core/Object/isObject'
import keys from 'anticore-core/Object/keys'
import substring from 'anticore-core/String/substring'
import toLowerCase from 'anticore-core/String/toLowerCase'
import on from '../emitter/on'
import after from './after'
import append from './append'
import attr from './attr'
import before from './before'
import data from './data'
import style from './style'
import text from './text'

export function update (element, config) {
  if (isObject(config)) {
    forEach(keys(config), name => {
      const value = config[name]

      if (name.substr(0, 2) === 'on') {
        on(toLowerCase(substring(name, 2)), element, value)
      } else if (name === 'style' && isObject(value)) {
        forEach(keys(value), name => style(element, name, value[name]))
      } else if (name === 'dataset' && isObject(value)) {
        forEach(keys(value), name => data(element, name, value[name]))
      } else if (name === 'text') {
        text(element, value)
      } else if (name === 'parent') {
        append(element, value)
      } else if (name === 'next') {
        before(element, value)
      } else if (name === 'prev') {
        after(element, value)
      } else {
        attr(element, name, value)
      }
    })
  }

  return element
}
