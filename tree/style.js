import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'
import isNull from 'anticore-core/null/isNull'
import isNumber from 'anticore-core/Number/isNumber'
import camelToDash from 'anticore-core/String/camelToDash'
import dashToCamel from 'anticore-core/String/dashToCamel'
import isString from 'anticore-core/String/isString'

const window = global()
const method = window.getComputedStyle

export default function style (element, name, value) {
  if (isString(value) || isNumber(value) || isNull(value)) {
    element.style[dashToCamel(name)] = value

    return element
  }

  return call(method, element)[camelToDash(name)]
}
