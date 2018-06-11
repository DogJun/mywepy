/**
   * [isXXX 基础方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
export const isUndefined = (item) => {
  return typeof item === 'undefined'
}
export const isDefined = (item) => {
  return !this.isUndefined(item)
}
export const isString = (item) => {
  return typeof item === 'string'
}
export const isNumber = (item) => {
  return typeof item === 'number'
}
export const isArray = (item) => {
  return Object.prototype.toString.apply(item) === '[object Array]'
}
export const isObject = (item) => {
  return typeof item === 'object' && !this.isArray(item)
}
export const isFunction = (item) => {
  return typeof item === 'function'
}
