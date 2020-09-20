export function getLength(data) {
  return data == null ? 0 : data.length
}

export function isArrayLike(data) {
  let length = getLength(data);
  return typeof length == 'number' && length >= 0 && length < Number.MAX_VALUE
}

export function identity(v) {
  return v
}

export const value = function (list) {
  return map(list, identity)
}

export function args1(value, key) {
  return key;
}

export const keys = function (list) {
  return map(list, args1);
}

function makeArr()

{
  return [];
}

function pushTo(value, result) {
  result.push(value);
  return value;
}

export function map(list, func) {
  return loop(makeArr, pushTo)(list, func)
}

function none() {
}

export function each(list, func) {
  return loop(identity, none)(list, func)
}

function loop(newData, body) {
  return function (list, func) {
    let result = newData(list)
    if (isArrayLike(list)) {
      for (let i = 0, len = list.length; i < len; i++) {
        body(func(list[i], i, list), result)
      }
    } else {
      for (let key in list) {
        if (list.hasOwnProperty(key)) {
          body(func(list[key], key, list), result)
        }
      }
    }
    return result
  }
}